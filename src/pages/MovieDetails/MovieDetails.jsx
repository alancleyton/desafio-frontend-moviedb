import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { Movies } from '../../services/Movies';
import Container from '../../styles/container';
import {
  Backdrop,
  DetailsContainer,
  MoviePoster,
  MovieInfo,
  MovieGenres,
  MovieRating,
  MovieOverview,
} from './MovieDetails.styles';
import { secondaryYellow } from '../../styles/colors';

const formattedReleaseDate = date => date.substring(0, 4);
const fixedRating = rating => rating.toFixed(1);

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Movies.getMovieDetails(id)
      .then(response => {
        setMovie(response.data);
      })
      .catch(err => Promise.resolve(err));
  }, [id]);

  return (
    <div>
      {movie.id && (
        <Backdrop
          url={`https://www.themoviedb.org/t/p/original/${movie.backdrop_path}`}
        >
          <Container>
            <DetailsContainer>
              <MoviePoster>
                <img
                  src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
              </MoviePoster>
              <MovieInfo>
                <h2>
                  {movie.title} ({formattedReleaseDate(movie.release_date)})
                </h2>
                <span>Título original: {movie.original_title}</span>
                <MovieGenres>
                  {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </MovieGenres>
                <MovieRating>
                  <AiFillStar size={32} color={secondaryYellow} />
                  <b>{fixedRating(movie.vote_average)}</b>
                </MovieRating>

                <MovieOverview>
                  <h3>Sinopse</h3>
                  <p>
                    {movie.overview === ''
                      ? 'Não foi encontrada nenhuma sinopse Traduzida em Português do Brasil para este filme.'
                      : movie.overview}
                  </p>
                </MovieOverview>
              </MovieInfo>
            </DetailsContainer>
          </Container>
        </Backdrop>
      )}
    </div>
  );
};

export default MovieDetails;
