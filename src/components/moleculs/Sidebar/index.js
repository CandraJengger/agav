import React from 'react';
import { GenerateComponent, Navbar } from '..';
import { Gap } from '../../atom';

const Sidebar = ({ form, error, onSubmit, onChange }) => {
  return (
    <div>
      <Navbar />
      <Gap height="61px" width="10px" />
      <GenerateComponent
        form={form}
        error={error}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <Gap height="44px" width="10px" />
    </div>
  );
};

export default Sidebar;
