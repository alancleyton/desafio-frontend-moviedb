import AXIOS from './axios';

export class Movies {
  static getPopularMovies() {
    return AXIOS.get(
      `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`,
    );
  }
}
