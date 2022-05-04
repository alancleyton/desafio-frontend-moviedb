import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Title, Container, MovieCard, MovieInfo } from './MovieList.styles';
import { secondaryYellow } from '../../styles/colors';

const movieIdHelper = () => Math.floor(Math.random() * 10) + 1;

const MovieList = ({ movies }) => (
  <section>
    <Title>Mais Populares</Title>
    <Container>
      {movies.map(movie => (
        <Link to={`/filme/${movie.id}`} key={`${movie.id}${movieIdHelper}`}>
          <MovieCard>
            <figure>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
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
        </Link>
      ))}
    </Container>
  </section>
);

export default MovieList;
