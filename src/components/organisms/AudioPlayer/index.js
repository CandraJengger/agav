import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import styles from './styles';
import { MiniAudio } from '../../moleculs';
import colors from '../../../assets/theme/colors';

const useStyles = makeStyles(styles);

const AudioPlayer = ({ audio }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <MiniAudio
        audio={audio}
        customIcon
        icon={<ExpandLessIcon style={{ color: colors.secondary }} />}
      />
      <Box className={classes.audioSection}>Isiasdasdasd</Box>
    </Box>
  );
};

export default AudioPlayer;
