import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Gap, AppLayout, GenerateComponent, Sidebar } from './components';

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
      <Grid container>
        <Grid item md={4}>
          <Hidden smDown>
            <Sidebar
              form={form}
              error={error}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={8}>
          <Gap height="61px" width="10px" />
          <GenerateComponent
            form={form}
            error={error}
            onChange={onChange}
            onSubmit={onSubmit}
          />
          <Gap height="44px" width="10px" />
          <Gap width="2px" height="50px" />
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export default App;
