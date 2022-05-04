import AXIOS from './axios';

export class Movies {
  static getPopularMovies(page) {
    return AXIOS.get(
      `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}&sort_by=release_date.asc`,
    );
  }

  static getMovieDetails(movieId) {
    return AXIOS.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
    );
  }

  static searchMovies(query) {
    return AXIOS.get(
      `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1&query=${query}`,
    );
  }
}
