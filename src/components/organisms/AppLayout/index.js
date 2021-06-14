import React from 'react';
import { MainContainer } from '../../atom';
import { Navbar } from '../../moleculs';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default AppLayout;
