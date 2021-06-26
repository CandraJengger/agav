import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Input = ({ error, onChange }) => {
  const classes = useStyles();

  const getVisibility = () => {
    if (error.status) {
      return 'visible';
    }

    return 'hidden';
  };

  return (
    <>
      <InputBase
        placeholder="Input Link"
        inputProps={{ 'aria-label': 'link field' }}
        className={classes.root}
        onChange={(event) => {
          onChange({ name: 'link', value: event.target.value });
        }}
      />
      <Typography
        component="p"
        className={classes.error}
        style={{ visibility: getVisibility() }}
      >
        {error.message}
      </Typography>
    </>
  );
};

export default Input;
