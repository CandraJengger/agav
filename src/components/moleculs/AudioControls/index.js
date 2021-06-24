import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Gap, IconButton } from '../../atom';
import styles from './styles';

// icons
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(styles);

const AudioControls = ({
  isPlaying,
  onNextAudio,
  onPrevAudio,
  onPlayPause,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.audioControl}>
      <IconButton icon={<SkipPreviousIcon />} flat onClick={onPrevAudio} />
      <Gap height="2px" width="28px" />
      <IconButton
        icon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        onClick={onPlayPause}
        primary
      />
      <Gap height="2px" width="28px" />
      <IconButton icon={<SkipNextIcon />} flat onClick={onNextAudio} />
    </Box>
  );
};

export default AudioControls;
