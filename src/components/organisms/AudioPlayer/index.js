import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WaveSurfer from 'wavesurfer.js';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IconButton, Wave, WaveContainer } from '../../atom';

import { AudioControls, MiniAudio } from '../../moleculs';

import colors from '../../../assets/theme/colors';

import styles from './styles';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(styles);

const AudioPlayer = ({
  audio,
  isPlaying,
  onStopAudio,
  onPlayPause,
  onNextAudio,
  onPrevAudio,
  onVerification,
  onHideAudioPlayer,
}) => {
  const classes = useStyles();
  let waveform = useRef();
  const containerWaveRef = useRef();

  useEffect(() => {
    if (audio) {
      if (waveform.current !== undefined) {
        console.log((waveform.current.mediaContainer.innerHTML = ''));
      }
      waveform.current = WaveSurfer.create({
        waveColor: colors['gray-2'],
        progressColor: colors.pink,
        cursorColor: '#8c4f64',
        cursorWidth: 1,
        container: containerWaveRef.current,
        backend: 'WebAudio',
        barWidth: 3,
        barRadius: 3,
        barHeight: 3,
        barGap: 3,
        height: 141,
        responsive: true,
      });
      waveform.current.load(
        `https://api-agav.herokuapp.com/${audio?.path}`
      );

      waveform.current.on('finish', () => {
        onStopAudio();
      });
    }
  }, [audio, onStopAudio]);

  return (
    <Box className={classes.container}>
      <MiniAudio
        audio={audio}
        customIcon
        customIconClick={() => {
          waveform.current.pause();
          onHideAudioPlayer();
        }}
        icon={<ExpandLessIcon style={{ color: colors.secondary }} />}
      />
      <Box className={classes.waveWrapper}>
        <WaveContainer>
          <Wave id="waveform" ref={containerWaveRef} />
        </WaveContainer>
        <Box className={classes.btnVerfication} onClick={onVerification}>
          <IconButton
            icon={<CheckCircleOutlineIcon style={{ fontSize: 16 }} />}
            primary={audio?.isVerified}
            flat={audio?.isVerified}
            small
          />

          <Typography
            className={classes.textBtn}
            style={{
              color: audio?.isVerified ? colors.primary : colors['gray-3'],
            }}
          >
            {audio?.isVerified ? 'Verification' : 'Unverification'}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.audioSection}>
        <AudioControls
          center
          isPlaying={isPlaying}
          onPlayPause={() => onPlayPause(waveform.current)}
          onNextAudio={() => onNextAudio(waveform.current)}
          onPrevAudio={() => onPrevAudio(waveform.current)}
        />
      </Box>
    </Box>
  );
};

export default AudioPlayer;
