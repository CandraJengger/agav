import React from 'react';
import { GenerateComponent, Navbar } from '../../moleculs';
import { Gap } from '../../atom';
import Box from '@material-ui/core/Box';

const Sidebar = ({ form, error, onSubmit, onChange }) => {
  const [width, setWidth] = React.useState(400);

  const getWidth = () => {
    if (window) {
      if (window.innerWidth > 1000) {
        return '400px';
      }

      return '360px';
    }
  };

  React.useEffect(() => {
    setWidth(getWidth());
    window.addEventListener('resize', () => {
      setWidth(getWidth());
    });
  }, []);

  return (
    <Box
      style={{
        position: 'fixed',
        minWidth: width,
        height: '100%',
      }}
    >
      <Navbar position="relative" />
      <Gap height="61px" width="10px" />
      <GenerateComponent
        form={form}
        error={error}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <Gap height="44px" width="10px" />
    </Box>
  );
};

export default React.memo(Sidebar);
