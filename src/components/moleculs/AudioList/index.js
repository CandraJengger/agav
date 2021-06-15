import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AudioItem, Button, Gap } from '../../atom';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './styles';

const useStyles = makeStyles(styles);

const AudioList = ({
  isPlaying,
  playAudio,
  audioList = [],
  onVerification,
  onSendVerifiedList,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>Audio List</Typography>
      <Box className={classes.listSection}>
        <Gap height="26px" width="10px" />
        <Button text="Send a verified list" onClick={onSendVerifiedList} />
        <Gap height="26px" width="10px" />
        <List dense={false}>
          {audioList.map((audio, index) => (
            <AudioItem
              key={index}
              position={index}
              title={audio.title}
              onClick={() => playAudio(audio.title)}
              onVerification={onVerification}
              playing={isPlaying === audio.title ? true : false}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AudioList;
