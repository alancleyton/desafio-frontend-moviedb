import styled from 'styled-components';
import {
  primaryGray,
  secondaryYellow,
  primaryLightGray,
  white,
} from '../../styles/colors';

export const Title = styled.h2`
  margin: 1.25rem;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${white};
  line-height: 1;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const MovieCard = styled.article`
  margin: 1.25rem;
  width: 195px;
  height: 370px;
  background-color: ${primaryGray};
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  &:hover {
    border 2px solid ${secondaryYellow};
  }

  figure {
    margin: 0;
    width: 100%;
    height: 75%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 576px) {
    width: 140px;
    height: 300px;
  }
`;

export const MovieInfo = styled.div`
  display: block;
  padding: 0.5rem;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    svg {
      margin-right: 4px;
    }
    b {
      color: ${primaryLightGray};
      font-size: 14px;
      font-weight: 400;
    }
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    color: ${white};
    line-height: 1;
    @media (max-width: 576px) {
      font-size: 12px;
    }
  }
`;
