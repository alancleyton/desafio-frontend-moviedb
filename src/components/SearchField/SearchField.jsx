import React, { useState, useEffect } from 'react';
import { MdMovie } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import debounce from 'lodash.debounce';
import {
  Container,
  Field,
  FieldDropDown,
  MoviesResult,
  MovieNotFound,
} from './SearchField.styles';
import { Movies } from '../../services/Movies';
import { Loading } from '../Loading';

const formattedReleaseDate = date => date.substring(0, 4);

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const updateSearchQuery = event => {
    setLoading(true);
    setSearchQuery(event.target.value);
  };
  const debouncedOnChange = debounce(updateSearchQuery, 500);

  const onInputFocus = () => setInputFocused(true);
  const onInputBlur = () => setInputFocused(false);

  useEffect(() => {
    async function handleSearch() {
      try {
        if (searchQuery) {
          const response = await Movies.searchMovies(searchQuery);
          setSearchResult(response.data.results);
        }
      } catch (err) {
        Promise.resolve(err);
      } finally {
        setLoading(false);
      }
    }

    handleSearch();
  }, [searchQuery]);

  const moviePoster = movie =>
    movie.poster_path ? (
      <img
        src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
    ) : (
      <MdMovie size={28} color="#a3a3a3" />
    );

  const movieReleaseDate = movie =>
    movie.release_date ? formattedReleaseDate(movie.release_date) : ' ';

  const renderSearchedMovies = result =>
    result.length > 0 ? (
      <MoviesResult>
        {searchResult.map(movie => (
          <li key={movie.id}>
            <figure>{moviePoster(movie)}</figure>
            <div>
              <h6>{movie.title}</h6>
              <span>{movieReleaseDate(movie)}</span>
            </div>
          </li>
        ))}
      </MoviesResult>
    ) : (
      <MovieNotFound>
        <p>Nenhum Filme encontrado</p>
      </MovieNotFound>
    );

  return (
    <Container>
      <Field>
        <input
          type="text"
          placeholder="Pesquisar por filmes"
          onChange={debouncedOnChange}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
        <button type="button">
          <FiSearch size={18} color="#ffffff" />
        </button>
      </Field>

      <FieldDropDown isVisible={inputFocused && searchQuery}>
        {loading ? (
          <Loading size="12px" style={{ marginTop: '80px' }} />
        ) : (
          renderSearchedMovies(searchResult)
        )}
      </FieldDropDown>
    </Container>
  );
};

export default SearchField;
