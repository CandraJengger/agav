import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import styles from './styles';
import { MiniAudio } from '../../moleculs';
import colors from '../../../assets/theme/colors';
import { IconButton } from '../../atom';

const useStyles = makeStyles(styles);

const AudioPlayer = ({ audio }) => {
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box className={classes.container}>
      <MiniAudio
        audio={audio}
        customIcon
        icon={<ExpandLessIcon style={{ color: colors.secondary }} />}
      />
      <Box className={classes.audioSection}>
        <Box className={classes.audioControl}>
          <IconButton icon={<SkipPreviousIcon />} flat />
          <IconButton
            icon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            onClick={togglePlay}
          />
          <IconButton icon={<SkipNextIcon />} flat />
        </Box>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
