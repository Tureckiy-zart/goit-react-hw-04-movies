import axios from "axios";

const API_KEY = "b10df2c9a5aac390aead1b7030414d18";
// const BASE_URL_OLD = "https://api.themoviedb.org/3";
// const BASE_URL = "https://api.themoviedb.org/4";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const moviesData = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  const data = moviesData.data.results;
  return data;
};

export const getMovieByTitle = async (searchQuery) => {
  const moviesData = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`
  );
  const data = moviesData.data.results;
  return data;
};
export const getMovieByID = async (id) => {
  const moviesData = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  const data = moviesData.data;
  return data;
};

export const getMovieCast = async (id) => {
  const moviesData = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  const data = moviesData.data;
  return data;
};
export const getMovieReview = async (id) => {
  const moviesData = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  const data = moviesData.data;
  return data;
};

// IMDB

// const API_KEY_IMDB = "k_SE2UVszk";

// export const  getDataFromIMDB = () => {
//   fetch(`https://imdb-api.com/en/API/Title/${API_KEY_IMDB}/tt1832382`)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// };
// getDataFromIMDB()
// https://api.themoviedb.org/3/movie/475430/credits?api_key=b10df2c9a5aac390aead1b7030414d18

/*
 *- [https://developers.themoviedb.org/3/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending) -
 *  список самых популярных фильмов на сегодня для создания коллекции на главной
 *  странице.
 *- [https://developers.themoviedb.org/3/search/search-movies](https://developers.themoviedb.org/3/search/search-movies) -
 *  поиск кинофильма по ключевому слову на странице фильмов.
 *- [https://developers.themoviedb.org/3/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details) -
 *  запрос полной информации о фильме для страницы кинофильма.
 *- [https://developers.themoviedb.org/3/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits) -
 *  запрос информации о актёрском составе для страницы кинофильма.
 *- [https://developers.themoviedb.org/3/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews) -
 *  запрос обзоров для страницы кинофильма.
 *
 *[Ссылка на документацию](https://developers.themoviedb.org/3/getting-started/introduction)
 */
// https://api.themoviedb.org/4/list/1?api_key=b10df2c9a5aac390aead1b7030414d18
