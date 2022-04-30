import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../styles/container';
import { Nav, NavMenu, NavForm, NavLogo } from './TopBar.styles';
import { SearchField } from '../SearchField';

const TopBar = () => (
  <Nav>
    <Container>
      <NavMenu>
        <NavLogo>
          <Link to="/">
            Movie<b>DB</b>
          </Link>
        </NavLogo>

        <NavForm>
          <SearchField />
        </NavForm>
      </NavMenu>
    </Container>
  </Nav>
);

export default TopBar;
