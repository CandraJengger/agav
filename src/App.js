import React from 'react';
import './App.css';
import { Button, Gap, AppLayout, Input } from './components';

function App() {
  return (
    <AppLayout>
      <Input />
      <Button text="Generate" />
      <Gap width="2px" height="50px" />
      <Button disabled text="Disabled" />
    </AppLayout>
  );
}

export default App;
