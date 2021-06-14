import React from 'react';
import './App.css';
import { Gap, AppLayout, GenerateComponent, Slider } from './components';

function App() {
  return (
    <AppLayout>
      <Gap height="61px" width="10px" />
      <GenerateComponent />
      <Gap height="44px" width="10px" />
      <Gap width="2px" height="50px" />
      <Slider title="min duration" />
      <Slider title="min duration" />
      <Slider title="min duration" />
    </AppLayout>
  );
}

export default App;
