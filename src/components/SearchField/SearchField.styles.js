import styled from 'styled-components';
import { lighten } from 'polished';
import {
  primaryGray,
  secondaryGray,
  secondarySilverGray,
  secondaryYellow,
  white,
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
`;

export const FieldDropDown = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  max-height: 600px;
  min-height: 200px;
  top: 50px;
  background-color: ${primaryGray};
  z-index: 1000;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  border-radius: 4px;
  overflow-y: auto;
  scrollbar-width: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${secondaryGray};
    border-radius: 16px;
    border: 4px solid transparent;
    min-height: 86px;
  }
`;

export const MoviesResult = styled.ul`
  margin: 0;
  padding: 0;
  li {
    padding: 0.75rem;
    display: flex;
    cursor: pointer;
    transition: all 0.3s ease;
    &:not(:last-child) {
      border-bottom: 1px solid ${secondaryGray};
    }
    &:hover {
      background-color: ${lighten(0.2, primaryGray)};
    }
    figure {
      margin: 0 8px 0 0;
      height: 80px;
      width: 60px;
      border-radius: 4px;
      background-color: ${secondaryGray};
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }
    div {
      h6 {
        margin-bottom: 0.5rem;
        font-size: 14px;
        font-weight: 600;
        color: ${white};
      }
      span {
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: ${white};
      }
    }
  }
`;

export const MovieNotFound = styled.div`
  text-align: center;
  p {
    margin-top 4rem;
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #ff2400;
  }
`;
