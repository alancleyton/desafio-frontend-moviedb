import styled from 'styled-components';
import {
  primaryGray,
  secondaryGray,
  white,
  primarySilverGray,
} from '../../styles/colors';

export const Backdrop = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      ${secondaryGray}
    ),
    url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem 0;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MoviePoster = styled.figure`
  margin: 0;
  height: 420px;
  min-width: 280px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
  @media (max-width: 576px) {
    margin-bottom: 4rem;
  }
`;

export const MovieInfo = styled.div`
  width: 100%;
  padding: 0 2.5rem;
  h2 {
    margin-bottom: 5px;
    font-size: 2rem;
    font-weight: 600;
    color: ${white};
    line-height: 120%;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${primarySilverGray};
  }
`;

export const MovieGenres = styled.ul`
  margin: 5px 0 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  li {
    margin: 4px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    color: ${white};
    font-size: 12px;
    font-weight: 400;
    border-radius: 12px;
  }
`;

export const MovieRating = styled.span`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  b {
    margin-left: 4px;
    color: ${white};
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const MovieOverview = styled.div`
  margin-top: 2rem;
  h3 {
    margin-bottom: 8px;
    font-size: 1.5rem;
    color: ${white};
    font-weight: 500;
  }
  p {
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${white};
  }
`;
