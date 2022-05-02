import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/home';
import MovieDetails from '../pages/MovieDetails';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <AppLayout>
            <Home />
          </AppLayout>
        }
      />

      <Route
        path="/filme/:id"
        exact
        element={
          <AppLayout>
            <MovieDetails />
          </AppLayout>
        }
      />
    </Routes>
  );
}

export default Router;
