import styled from 'styled-components';
import { darken } from 'polished';
import { secondaryYellow, primaryGray } from '../../styles/colors';

export const LoadMoreButton = styled.button`
  margin: 25px auto 25px auto;
  display: block;
  width: 100%;
  align-items: center;
  appearance: button;
  padding: 16px 24px;
  user-select: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 16px;
  cursor: pointer;
  color: ${primaryGray};
  font-weight: 700;
  background-color: ${secondaryYellow};
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${darken(0.2, secondaryYellow)};
  }
`;
