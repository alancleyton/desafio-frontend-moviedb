import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

describe('Testing MovieList', () => {
  it('should render cards with correct movies data passed by props', () => {
    const fakeMoviesList = [
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

    render(<MovieList movies={fakeMoviesList} />);
    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(screen.getByText('Transformers')).toBeInTheDocument();
    expect(screen.getByText('Interestelar')).toBeInTheDocument();
  });
});
