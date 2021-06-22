import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from '@material-ui/core/IconButton';

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

  React.useEffect(() => {
    console.log('mini audio', audio?.title);
  }, [audio]);

  const getFixed = () => {
    if (fixed) {
      return 'fixed';
    }

    return 'relative';
  };

  return (
    <Box className={classes.wrapper} style={(style, { position: getFixed() })}>
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

      <IconButton onClick={onClick}>
        {customIcon ? (
          icon
        ) : play ? (
          <PauseIcon style={{ color: colors.secondary }} />
        ) : (
          <PlayArrowIcon style={{ color: colors.secondary }} />
        )}
      </IconButton>
    </Box>
  );
};

export default MiniAudio;
