import React from 'react';
import './App.css';
import { Gap, AppLayout, GenerateComponent } from './components';

function App() {
  const [form, setForm] = React.useState({
    link: '',
    'sample-rate': 100,
    'max-duration': 100,
    'min-duration': 100,
    frames: 100,
    threshold: 100,
  });
  const [error, setError] = React.useState(false);

  const onSubmit = () => {
    if (form.link) {
      console.log('ini yang di submit', form);
      return;
    }

    setError(true);
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    setError(false);
  };

  return (
    <AppLayout>
      <Gap height="61px" width="10px" />
      <GenerateComponent
        form={form}
        error={error}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <Gap height="44px" width="10px" />
      <Gap width="2px" height="50px" />
    </AppLayout>
  );
}

export default App;
