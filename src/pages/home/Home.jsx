import React, { useEffect, useState, useRef, useCallback } from 'react';
import Container from '../../styles/container';
import { LoadMoreButton } from './Home.styles';
import { Movies } from '../../services/Movies';
import { MovieList } from '../../components/MovieList';
import { Loading } from '../../components/Loading';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const pageAmountRef = useRef(1);

  const fetchPopularMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await Movies.getPopularMovies(1);
      setMovies(response.data.results);
    } catch (err) {
      Promise.resolve(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  const loadMoreMovies = useCallback(async () => {
    pageAmountRef.current += 1;
    try {
      const response = await Movies.getPopularMovies(pageAmountRef.current);
      setMovies(oldMovies => oldMovies.concat(response.data.results));
    } catch (err) {
      Promise.resolve(err);
    }
  }, [pageAmountRef]);

  if (loading) {
    return <Loading style={{ marginTop: '400px' }} />;
  }

  return (
    <div>
      {movies.length > 0 && (
        <Container>
          <MovieList movies={movies} />
          <LoadMoreButton type="button" onClick={loadMoreMovies}>
            Carregar mais
          </LoadMoreButton>
        </Container>
      )}
    </div>
  );
}

export default Home;
