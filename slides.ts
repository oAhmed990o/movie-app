import {
  fetchPopular,
  fetchNowPlaying,
  fetchUpcoming,
  fetchTopRated,
  fetchMovieSearch,
} from './utils/movieapi';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  language: string;
  overview: string;
  imageUrl: string;
  backUrl: string;
}

const topRatedSlides: Movie[] = [];
const popularSlides: Movie[] = [];
const nowPlayingSlides: Movie[] = [];
const upcomingSlides: Movie[] = [];

export const allSlides: Movie[][] = [topRatedSlides, popularSlides, nowPlayingSlides, upcomingSlides];
export const slideCategories: string[] = ['Top Rated', 'Popular', 'Now Playing', 'Upcoming'];

const fetchAndPopulateSlides = async (fetchFunction: () => Promise<{ results: Movie[] }>, slidesArray: Movie[]) => {
  try {
    const res = await fetchFunction();
    const movies = res.results;
    movies.forEach((movie: any) => {
      slidesArray.push({
        id: movie.id,
        title: movie.original_title,
        releaseDate: movie.release_date,
        language: movie.original_language,
        overview: movie.overview,
        imageUrl: `${BASE_URL}${movie.poster_path}`,
        backUrl: `${BASE_URL}${movie.backdrop_path}`,
      });
    });
    // console.log(movies[0]);
  } catch (error) {
    console.log(`Error fetching movies: ${error}`);
  }
};

const fetchAndPopulateSearch = async (fetchFunction: (query: string) => Promise<{ results: Movie[] }>, query: string) => {
  try {
    const res = await fetchFunction(query);
    const movies = res.results;
    const newArray = movies.map((movie: any) => ({
      id: movie.id,
      title: movie.original_title,
      releaseDate: movie.release_date,
      language: movie.original_language,
      overview: movie.overview,
      imageUrl: `${BASE_URL}${movie.poster_path}`,
      backUrl: `${BASE_URL}${movie.backdrop_path}`,
    }));

    return newArray;
  } catch (error) {
    console.log(`Error fetching movies: ${error}`);
    return [];
  }
};

const fetchSlides = async () => {
  await Promise.all([
    fetchAndPopulateSlides(fetchPopular, popularSlides),
    fetchAndPopulateSlides(fetchNowPlaying, nowPlayingSlides),
    fetchAndPopulateSlides(fetchUpcoming, upcomingSlides),
    fetchAndPopulateSlides(fetchTopRated, topRatedSlides),
  ]);
};

export const fetchSearch = async (query: string): Promise<Movie[]> => {
  const [results] = await Promise.all([
    fetchAndPopulateSearch(fetchMovieSearch, query),
  ]);
  return results;
};

fetchSlides();