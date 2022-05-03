import styled, { keyframes } from 'styled-components';

const bouncingAnimation = keyframes`
  to {
    opacity: 0.1;
    transform: translateY(-16px);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  > div {
    width: ${props => (props.size ? props.size : '16px')};
    height: ${props => (props.size ? props.size : '16px')};
    margin: 3px 6px;
    border-radius: 50%;
    background-color: ${props => (props.color ? props.color : '#ffffff')};
    opacity: 1;
    animation: ${bouncingAnimation} 0.5s infinite alternate;
  }
  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
