import React from 'react';
import { render } from '@testing-library/react';
import { Movies } from '../../services/Movies';
import Home from './Home';

describe('Testing Home page', () => {
  it('should call getPopularMovies service method when component mounts', () => {
    const getPopuparMoviesSpy = jest.spyOn(Movies, 'getPopularMovies');
    render(<Home />);
    expect(getPopuparMoviesSpy).toHaveBeenCalled();
    expect(getPopuparMoviesSpy).toHaveBeenCalledWith(1);
  });
});
