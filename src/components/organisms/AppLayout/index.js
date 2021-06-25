import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { MainContainer } from '../../atom';
import { Navbar } from '../../moleculs';

const AppLayout = ({ children }) => {
  return (
    <>
      <Hidden mdUp>
        <Navbar position="sticky" />
      </Hidden>
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default withWidth()(AppLayout);
