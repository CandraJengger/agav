import React from 'react';
import './App.css';
import { Button, Gap, AppLayout } from './components';

function App() {
  return (
    <AppLayout>
      <h1>Halo Dunia</h1>
      <Button text="Generate" />
      <Gap width="2px" height="50px" />
      <Button disabled text="Disabled" />
    </AppLayout>
  );
}

export default App;
