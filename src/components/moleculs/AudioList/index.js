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
  withButtonSend,
  textAlign,
  titleBold,
  withTitle,
}) => {
  const classes = useStyles();

  const getTextAlign = () => {
    if (textAlign === 'center') {
      return 'center';
    }

    if (textAlign === 'left') {
      return 'left';
    }

    if (textAlign === 'right') {
      return 'right';
    }
  };

  const getBold = () => {
    if (titleBold) {
      return 'bold';
    }

    return 400;
  };

  return (
    <Box className={classes.wrapper}>
      {withTitle && (
        <Typography
          className={classes.title}
          style={{ textAlign: getTextAlign(), fontWeight: getBold() }}
        >
          Audio List
        </Typography>
      )}
      <Box className={classes.listSection}>
        {withButtonSend && (
          <>
            <Gap height="26px" width="10px" />
            <Button text="Send a verified list" onClick={onSendVerifiedList} />
          </>
        )}
        <Gap height="26px" width="10px" />
        <List dense={false}>
          <Grid container spacing={2}>
            {audioList.map((audio, index) => (
              <Grid item key={index} xs={12} md={12}>
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
