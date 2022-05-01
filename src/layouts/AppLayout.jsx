import React from 'react';
import { TopBar } from '../components/TopBar';

const AppLayout = ({ children }) => (
  <main>
    <TopBar />
    {children}
  </main>
);

export default AppLayout;
