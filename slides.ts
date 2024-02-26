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
  original_title: string;
  release_date: string;
  original_language: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

interface Slide {
  id: number;
  title: string;
  releaseDate: string;
  language: string;
  overview: string;
  imageUrl: string;
  backUrl: string;
}

const topRatedSlides: Slide[] = [];
const popularSlides: Slide[] = [];
const nowPlayingSlides: Slide[] = [];
const upcomingSlides: Slide[] = [];
export const searchResults: Slide[] = [];

export const allSlides: Slide[][] = [topRatedSlides, popularSlides, nowPlayingSlides, upcomingSlides];
export const slideCategories: string[] = ['Top Rated', 'Popular', 'Now Playing', 'Upcoming'];

const fetchAndPopulateSlides = async (fetchFunction: () => Promise<{ results: Movie[] }>, slidesArray: Slide[]) => {
  try {
    const res = await fetchFunction();
    const movies = res.results;
    movies.forEach((movie: Movie) => {
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
  } catch (error) {
    console.log(`Error fetching movies: ${error}`);
  }
};

const fetchAndPopulateSearch = async (fetchFunction: (query: string) => Promise<{ results: Movie[] }>, slidesArray: Slide[], query: string) => {
  try {
    const res = await fetchFunction(query);
    const movies = res.results;
    const newArray = movies.map((movie: Movie) => ({
      id: movie.id,
      title: movie.original_title,
      releaseDate: movie.release_date,
      language: movie.original_language,
      overview: movie.overview,
      imageUrl: `${BASE_URL}${movie.poster_path}`,
      backUrl: `${BASE_URL}${movie.backdrop_path}`,
    }));

    searchResults.splice(0, searchResults.length, ...newArray);
  } catch (error) {
    console.log(`Error fetching movies: ${error}`);
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

export const fetchSearch = async (query: string) => {
  await Promise.all([
    fetchAndPopulateSearch(fetchMovieSearch, searchResults, query),
  ]);
};

fetchSlides();