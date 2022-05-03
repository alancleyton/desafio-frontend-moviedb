import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import MovieList from './MovieList';
import MovieDetails from '../../pages/MovieDetails';

describe('Testing MovieList', () => {
  it('should render cards with correct movies data passed by props', () => {
    const fakeMoviesListData = [
      {
        id: 0,
        title: 'Transformers',
        poster_path: 'fake-Transformers-poster-path',
        vote_average: 7.0,
      },
      {
        id: 1,
        title: 'Interestelar',
        poster_path: 'fake-Interestelar-poster-path',
        vote_average: 8.6,
      },
    ];

    render(
      <MemoryRouter>
        <MovieList movies={fakeMoviesListData} />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(screen.getByText('Transformers')).toBeInTheDocument();
    expect(screen.getByText('Interestelar')).toBeInTheDocument();
  });

  it('should push to movie details page when movie article has been clicked', async () => {
    const fakeMoviesListData = [
      {
        id: 1858,
        title: 'Transformers',
        poster_path: 'fake-Transformers-poster-path',
        vote_average: 7.0,
      },
    ];

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<MovieList movies={fakeMoviesListData} />} />
          <Route path="/filme/:id" element={<MovieDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    const movie = screen.getByRole('heading', { name: /Transformers/i });
    userEvent.click(movie);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Sinopse/i }));
    });
  });
});
