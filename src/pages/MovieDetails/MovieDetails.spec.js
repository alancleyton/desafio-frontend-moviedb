import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { Movies } from '../../services/Movies';

describe('Testing MovieDetails', () => {
  it('should render MovieDetails page component', () => {
    render(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>,
    );
  });

  it('should call getMovieDetails when component mounts with route id param', () => {
    const getMoviesDetailsSpy = jest.spyOn(Movies, 'getMovieDetails');
    render(
      <MemoryRouter initialEntries={['/filme/123456']}>
        <Routes>
          <Route path="filme/:id" element={<MovieDetails />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(getMoviesDetailsSpy).toHaveBeenCalledTimes(1);
    expect(getMoviesDetailsSpy).toHaveBeenCalledWith('123456');
  });
});
