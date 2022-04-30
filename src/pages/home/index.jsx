import React from 'react';
import { TopBar } from '../../components/TopBar';
import Container from '../../styles/container';

export default function Home() {
  return (
    <div>
      <TopBar />

      <Container>
        <h2>Home page</h2>
      </Container>
    </div>
  );
}
