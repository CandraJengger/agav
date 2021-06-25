import React from 'react';
import ButtonMui from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const useStyles = makeStyles(styles);
const Button = ({ text, onClick, type = 'primary', ...props }) => {
  const classes = useStyles();

  const getBackground = () => {
    if (type === 'primary') {
      return colors.primary;
    }

    if (type === 'secondary') {
      return colors.pink;
    }
  };

  return (
    <ButtonMui
      className={classes.root}
      {...props}
      onClick={onClick}
      style={{
        background: getBackground(),
      }}
    >
      {text}
    </ButtonMui>
  );
};

export default Button;
