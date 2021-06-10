import React from 'react';
import ButtonMui from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Button = ({ text, ...props }) => {
  return (
    <ButtonMui className={styles.root} {...props}>
      {text}
    </ButtonMui>
  );
};

export default withStyles(styles)(Button);
