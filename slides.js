import { fetchPopular } from './utils/movieapi';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const popularSlides = [];

fetchPopular()
    .then(res => {
        const movies = res["results"];
        movies.forEach(movie => {
            // console.log(movie["original_title"]);
            popularSlides.push(
                {
                    id: movie["id"],
                    name: movie["original_title"],
                    imageUrl: `${BASE_URL}${movie["poster_path"]}`, 
                }
                );
        });
        // console.log(popularSlides);
    })
    .catch(error => {
        console.log('Error fetching popular movies:', error);
    });
