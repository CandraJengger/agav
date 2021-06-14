import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { MainContainer } from '../../atom';
import { Navbar, Sidebar } from '../../moleculs';
import Grid from '@material-ui/core/Grid';

const AppLayout = ({ children }) => {
  return (
    <>
      <Hidden mdUp>
        <Navbar />
      </Hidden>
      <Grid container spacing="3">
        <Grid item md={4}>
          <Hidden smDown>
            <Sidebar />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={8}>
          <MainContainer>{children}</MainContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default withWidth()(AppLayout);
