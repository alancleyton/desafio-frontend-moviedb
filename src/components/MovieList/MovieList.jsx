import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Title, Container, MovieCard, MovieInfo } from './MovieList.styles';
import { secondaryYellow } from '../../styles/colors';

const MovieList = ({ movies }) => (
  <section>
    <Title>Mais Populares</Title>
    <Container>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </figure>

          <MovieInfo>
            <span>
              <AiFillStar size={16} color={secondaryYellow} />
              <b>{movie.vote_average.toFixed(1)}</b>
            </span>
            <h6>{movie.title}</h6>
          </MovieInfo>
        </MovieCard>
      ))}
    </Container>
  </section>
);

export default MovieList;
