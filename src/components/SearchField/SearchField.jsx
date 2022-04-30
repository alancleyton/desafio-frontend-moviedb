import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container, Field } from './SearchField.styles';

const SearchField = () => (
  <Container>
    <Field>
      <input type="text" placeholder="Pesquisar por filmes" />
      <button type="button">
        <FiSearch size={18} color="#ffffff" />
      </button>
    </Field>
  </Container>
);

export default SearchField;
