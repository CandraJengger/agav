import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Navbar = ({ ...props }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} {...props}>
      <Typography component="h1" className={classes.title}>
        Agav
      </Typography>
    </AppBar>
  );
};

export default Navbar;
