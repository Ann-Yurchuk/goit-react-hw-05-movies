import axios from 'axios';

const API_KEY = '731d0de83e87846e476f2413b50e391a';

export const fetchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`
  );
  return response.data;
};

export const getFetchMovieById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getFetchTrendingMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  console.log(response.data.results);
  return response.data.results;
};

export const getFetchMovieCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  console.log(response.data.cast);
  return response.data.cast;
};

export const getFetchMovieReviews = async (movieId, page = 1) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  console.log(response.data.results);
  return response.data.results;
};
