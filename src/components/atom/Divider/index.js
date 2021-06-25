import React from 'react';
import DividerMui from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 16,
    borderRadius: 50,
    boxShadow: '2px 2px 5px #CCCCCC, -2px -2px 5px #FFFFFF',
    background: 'linear-gradient(180deg, #D8D8D8 0%, #FFFFFF 100%)',
  },
});

const Divider = () => {
  const classes = useStyles();

  return <DividerMui className={classes.root} />;
};

export default Divider;
