import React, { useEffect, useState } from 'react';
import Container from '../../styles/container';
import { Movies } from '../../services/Movies';
import { MovieList } from '../../components/MovieList';
import { Loading } from '../../components/Loading';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchPopularMovies() {
      try {
        const response = await Movies.getPopularMovies();
        setMovies(response.data.results);
      } catch (err) {
        Promise.resolve(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPopularMovies();
  }, []);

  if (loading) {
    return <Loading style={{ marginTop: '400px' }} />;
  }

  return (
    <div>
      <Container>
        <MovieList movies={movies} />
      </Container>
    </div>
  );
}

export default Home;
