import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Input = ({ onChange }) => {
  const classes = useStyles();

  return (
    <InputBase
      placeholder="Input Link"
      inputProps={{ 'aria-label': 'link field' }}
      className={classes.root}
      onChange={(event) =>
        onChange({ name: 'link', value: event.target.value })
      }
    />
  );
};

export default Input;
