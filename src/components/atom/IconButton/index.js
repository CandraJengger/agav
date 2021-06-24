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
  primary,
  small,
  ...props
}) => {
  const classes = useStyles();

  const getBoxShadow = () => {
    if (flat) {
      return '-8px -8px 16px #FFFFFF, 8px 8px 16px #DFDFDF';
    }

    return 'inset -8px -8px 16px #FFFFFF, inset 8px 8px 16px #DFDFDF';
  };

  const getColor = () => {
    if (primary) {
      return colors.primary;
    }
    return colors['gray-3'];
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

  return (
    <IconButtonMui
      className={classes.iconButton}
      style={{
        ...style,
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
