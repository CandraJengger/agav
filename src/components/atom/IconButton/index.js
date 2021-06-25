import React from 'react';
import IconButtonMui from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const useStyles = makeStyles(styles);

const IconButton = ({
  icon,
  style,
  flat,
  onClick,
  small,
  pressed,
  bg,
  ...props
}) => {
  const classes = useStyles();

  const getBoxShadow = () => {
    if (flat && bg === 'primary') {
      console.log('con');
      return '6px 6px 11px #282828, -6px -6px 11px #363636';
    }

    if (pressed && bg === 'primary') {
      return 'inset 8px 8px 15px #282828, inset -8px -8px 15px #363636';
    }

    if (flat) {
      return '-8px -8px 16px #FFFFFF, 8px 8px 16px #DFDFDF';
    }

    if (pressed) {
      return 'inset -8px -8px 16px #FFFFFF, inset 8px 8px 16px #DFDFDF';
    }
  };

  const getColor = () => {
    if (bg === 'primary') {
      console.log('color :>> ', bg);
      return colors.white;
    }
    return colors.primary;
  };

  const getWidth = () => {
    if (small) {
      return 35;
    }

    return 55;
  };

  const getHeight = () => {
    if (small) {
      return 35;
    }

    return 55;
  };

  const getBackground = () => {
    if (bg === 'primary') {
      return colors.primary;
    }

    return colors.secondary;
  };

  return (
    <IconButtonMui
      className={classes.iconButton}
      style={{
        ...style,
        background: getBackground(),
        boxShadow: getBoxShadow(),
        color: getColor(),
        width: getWidth(),
        height: getHeight(),
      }}
      onClick={onClick}
    >
      {icon}
    </IconButtonMui>
  );
};

export default IconButton;
