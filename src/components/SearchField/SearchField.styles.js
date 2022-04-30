import styled from 'styled-components';
import {
  secondaryGray,
  secondarySilverGray,
  secondaryYellow,
} from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 35rem;
`;

export const Field = styled.div`
  display: flex;

  input {
    width: 100%;
    padding: 0.5rem;
    margin-right: 2px;
    border-radius: 5px 0 0 5px;
    border: 2px transparent solid;
    background-color: ${secondaryGray};
    color: #ffffff;
  }

  input::placeholder {
    color: ${secondarySilverGray};
    font-size: 14px;
    font-weight: 400;
  }

  input:active,
  input:focus {
    border-color: ${secondaryYellow};
    background-color: #141414;
    transition: all 0.2s ease;
  }

  button {
    display: inline-flex;
    align-items: center;
    appearance: button;
    margin: 0;
    padding: 0.5rem;
    vertical-align: middle;
    cursor: pointer;
    background-color: ${secondaryGray};
    border: 2px solid ${secondaryGray};
    border-radius: 0 5px 5px 0;
    transition: all 0.2s ease;
  }

  button:hover,
  button:focus {
    filter: brightness(150%);
  }
`;
