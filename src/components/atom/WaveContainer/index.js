import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../assets/theme/colors';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    width: '100%',
    padding: '12px',
    borderRadius: 8,
  },
}));

const WaveformContainer = ({ type, height, children }) => {
  const classes = useStyles();

  const getBackground = () => {
    if (type === 'primary') {
      return colors.primary;
    }

    return colors.secondary;
  };

  const getBoxShadow = () => {
    if (type === 'primary') {
      return '8px 8px 15px #282828, -8px -8px 15px #363636';
    }

    return '8px 8px 16px #DFDFDF, -8px -8px 16px #FFFFFF';
  };

  return (
    <div
      className={classes.container}
      style={{
        background: getBackground(),
        boxShadow: getBoxShadow(),
        height: height ? height : 165,
      }}
    >
      {children}
    </div>
  );
};

export default WaveformContainer;
