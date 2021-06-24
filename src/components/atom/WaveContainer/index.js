import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../assets/theme/colors';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '165px',
    boxSizing: 'border-box',
    width: '100%',
    background: colors.secondary,
    padding: '12px',
    boxShadow: '8px 8px 16px #DFDFDF, -8px -8px 16px #FFFFFF',
    borderRadius: 8,
  },
}));

const WaveformContainer = (props) => {
  const classes = useStyles();

  return <div className={classes.container}>{props.children}</div>;
};

export default WaveformContainer;
