import React, { useEffect, useState } from 'react';
import Container from '../../styles/container';
import { Movies } from '../../services/Movies';
import { MovieList } from '../../components/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Movies.getPopularMovies().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <Container>
        <MovieList movies={movies} />
      </Container>
    </div>
  );
}

export default Home;
