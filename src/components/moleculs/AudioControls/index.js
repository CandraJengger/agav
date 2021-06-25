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
  type,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.audioControl}>
      {type === 'primary' ? (
        <>
          <IconButton
            icon={<SkipPreviousIcon />}
            flat="inak"
            bg="primary"
            onClick={onPrevAudio}
          />
          <Gap height="2px" width="28px" />
          <IconButton
            icon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            onClick={onPlayPause}
            flat
            bg="primary"
          />
          <Gap height="2px" width="28px" />
          <IconButton
            icon={<SkipNextIcon />}
            flat
            bg="primary"
            onClick={onNextAudio}
          />
        </>
      ) : (
        <>
          <IconButton icon={<SkipPreviousIcon />} flat onClick={onPrevAudio} />
          <Gap height="2px" width="28px" />
          <IconButton
            icon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            onClick={onPlayPause}
            pressed
          />
          <Gap height="2px" width="28px" />
          <IconButton icon={<SkipNextIcon />} flat onClick={onNextAudio} />
        </>
      )}
    </Box>
  );
};

export default AudioControls;
