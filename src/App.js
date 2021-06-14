import React from 'react';
import './App.css';
import { Gap, AppLayout, GenerateComponent } from './components';

function App() {
  return (
    <AppLayout>
      <Gap height="61px" width="10px" />
      <GenerateComponent />
      <Gap height="44px" width="10px" />
      <Gap width="2px" height="50px" />
    </AppLayout>
  );
}

export default App;
