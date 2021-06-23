import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from '@material-ui/core/IconButton';
import { Audio } from '../../atom';

const useStyles = makeStyles(styles);

const MiniAudio = ({
  audio,
  play,
  onClick,
  customIcon,
  icon,
  style,
  fixed,
}) => {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  React.useEffect(() => {
    console.log('mini audio', audio?.title);
  }, [audio]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getFixed = () => {
    if (fixed) {
      return 'fixed';
    }

    return 'relative';
  };

  return (
    <Box className={classes.wrapper} style={{ ...style, position: getFixed() }}>
      <Box>
        <Typography className={classes.title}>{audio?.title}</Typography>
        <Typography className={classes.subTitle}>
          {audio
            ? audio?.isVerified
              ? 'Verified'
              : 'Not Verified'
            : 'Not audio selected'}
        </Typography>
      </Box>

      {customIcon ? (
        <IconButton onClick={onClick}>{icon}</IconButton>
      ) : (
        <IconButton onClick={togglePlay}>
          {' '}
          {isPlaying ? (
            <PauseIcon style={{ color: colors.secondary }} />
          ) : (
            <PlayArrowIcon style={{ color: colors.secondary }} />
          )}
        </IconButton>
      )}

      <Audio
        audioRef={audioRef}
        src={audio?.path}
        setIsPlaying={setIsPlaying}
      />
    </Box>
  );
};

export default MiniAudio;
