import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
