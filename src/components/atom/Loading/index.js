import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';

const useStyles = makeStyles(styles);

const Loading = ({ text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <CircularProgress className={classes.loading} />
      {text && <Typography className={classes.text}>{text}</Typography>}
    </Box>
  );
};

export default Loading;
