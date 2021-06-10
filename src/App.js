import React from 'react';
import './App.css';
import { Button, Gap, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Halo Dunia</h1>
      <Button text="Generate" />
      <Gap width="2px" height="50px" />
      <Button disabled text="Disabled" />
    </div>
  );
}

export default App;
