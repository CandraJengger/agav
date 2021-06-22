import React from 'react';
import IconButtonMui from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const useStyles = makeStyles(styles);

const IconButton = ({ icon, style, flat, onClick, ...props }) => {
  const classes = useStyles();

  const getBoxShadow = () => {
    if (flat) {
      return '-8px -8px 16px #FFFFFF, 8px 8px 16px #DFDFDF';
    }

    return 'inset -8px -8px 16px #FFFFFF, inset 8px 8px 16px #DFDFDF';
  };

  const getColor = () => {
    if (flat) {
      return colors['gray-3'];
    }

    return colors.primary;
  };

  return (
    <IconButtonMui
      className={classes.iconButton}
      style={{ ...style, boxShadow: getBoxShadow(), color: getColor() }}
      onClick={onClick}
    >
      {icon}
    </IconButtonMui>
  );
};

export default IconButton;
