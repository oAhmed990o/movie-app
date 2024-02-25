import { fetchPopular, fetchNowPlaying, fetchUpcoming, fetchTopRated, fetchMovieSearch } from './utils/movieapi';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const topRatedSlides = [];
const popularSlides = [];
const nowPlayingSlides = [];
const upcomingSlides = [];
export const searchResults = [];

export const allSlides = [topRatedSlides, popularSlides, nowPlayingSlides, upcomingSlides];
export const slideCategories = ['Top Rated', 'Popular', 'Now Playing', 'Upcoming'];

const fetchAndPopulateSlides = async (fetchFunction, slidesArray) => {
    try {
      const res = await fetchFunction();
      const movies = res["results"];
      movies.forEach(movie => {
        // if (movie["adult"] === false){}
        slidesArray.push({
          id: movie["id"],
          title: movie["original_title"],
          releaseDate: movie["release_date"],
          language: movie["original_language"],
          overview: movie["overview"],
          imageUrl: `${BASE_URL}${movie["poster_path"]}`,
          backUrl: `${BASE_URL}${movie["backdrop_path"]}`,
        });
      });
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
    }
  };

  const fetchAndPopulateSearch = async (fetchFunction, slidesArray, query) => {
    try {
      const res = await fetchFunction(query);
      const movies = res["results"];
      movies.forEach(movie => {
        slidesArray.push({
          id: movie["id"],
          title: movie["original_title"],
          releaseDate: movie["release_date"],
          language: movie["original_language"],
          overview: movie["overview"],
          imageUrl: `${BASE_URL}${movie["poster_path"]}`,
          backUrl: `${BASE_URL}${movie["backdrop_path"]}`,
        });
      });
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

  export const fetchSearch = async (query) => {
    await Promise.all([
      fetchAndPopulateSearch(fetchMovieSearch, searchResults, query),
    ]);
  };
  
  fetchSlides();