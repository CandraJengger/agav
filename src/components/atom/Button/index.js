import React from 'react';
import ButtonMui from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);
const Button = ({ text, onClick, ...props }) => {
  const classes = useStyles();

  return (
    <ButtonMui className={classes.root} {...props} onClick={onClick}>
      {text}
    </ButtonMui>
  );
};

export default Button;
