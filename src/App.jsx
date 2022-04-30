import React from 'react';
import GlobalStyles from './styles/global';
import { HelloWorld } from './components/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld msg="Hello World!" />
      <GlobalStyles />
    </div>
  );
}

export default App;
