import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button } from '../../atom';
import styles from './styles';

const useStyles = makeStyles(styles);

const GenerateComponent = () => {
  const classes = useStyles();

  return (
    <Box component="section" textAlign="center" className={classes.root}>
      <Input />
      <Button text="Generate" />
    </Box>
  );
};

export default GenerateComponent;
