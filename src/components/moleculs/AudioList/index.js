import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AudioItem, Button, Gap } from '../../atom';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

const useStyles = makeStyles(styles);

const AudioList = ({
  titleSongCurrentPlaying,
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
          <Grid container spacing={2}>
            {audioList.map((audio, index) => (
              <Grid item key={index} xs={12} md={6}>
                <AudioItem
                  position={index}
                  audio={audio}
                  onClick={() => playAudio(audio, index)}
                  onVerification={onVerification}
                  playing={
                    titleSongCurrentPlaying === audio.title ? true : false
                  }
                />
              </Grid>
            ))}
          </Grid>
        </List>
      </Box>
    </Box>
  );
};

export default AudioList;
