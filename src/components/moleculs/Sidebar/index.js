import React from 'react';
import { GenerateComponent, Navbar } from '../../moleculs';
import { Gap } from '../../atom';
import Box from '@material-ui/core/Box';

const Sidebar = ({ form, error, onSubmit, onChange }) => {
  return (
    <Box style={{ position: 'fixed', minWidth: '400px' }}>
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

export default Sidebar;
