import React from 'react';
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
  audioRef,
  onPlayPause,
  isPlaying,
  onStopAudio,
  customIconClick,
  customIcon,
  handleOpenAudioPlayer,
  icon,
  style,
  fixed,
  position,
}) => {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('mini audio', audio?.title);
  }, [audio]);

  const getFixed = () => {
    if (fixed) {
      return 'fixed';
    }

    return 'relative';
  };

  const getPosition = () => {
    if (position === 'start') {
      return 'flex-start';
    }

    return 'space-between';
  };

  return (
    <Box
      className={classes.wrapper}
      style={{
        ...style,
        position: getFixed(),
        justifyContent: getPosition(),
      }}
    >
      <Box onClick={handleOpenAudioPlayer} className={classes.textWrapper}>
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
        <IconButton onClick={customIconClick}>{icon}</IconButton>
      ) : (
        <IconButton
          onClick={() => onPlayPause(false)}
          style={{ marginLeft: 20 }}
        >
          {' '}
          {isPlaying ? (
            <PauseIcon style={{ color: colors.secondary }} />
          ) : (
            <PlayArrowIcon style={{ color: colors.secondary }} />
          )}
        </IconButton>
      )}

      <Audio audioRef={audioRef} src={audio?.path} onStopAudio={onStopAudio} />
    </Box>
  );
};

export default MiniAudio;
