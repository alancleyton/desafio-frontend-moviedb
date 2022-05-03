import React from 'react';
import { Container } from './Loading.styles';

const Loading = ({ size, color, style }) => (
  <Container size={size} color={color} style={style}>
    <div />
    <div />
    <div />
  </Container>
);

export default Loading;
