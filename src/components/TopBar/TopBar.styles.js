import styled from 'styled-components';
import { primaryGray, primaryYellow, white } from '../../styles/colors';

export const Nav = styled.nav`
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: ${primaryGray};
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const NavLogo = styled.div`
  a {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    color: ${white};
    margin-right: 1rem;
    b {
      color: ${primaryYellow};
    }
  }
`;

export const NavForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
