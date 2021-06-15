import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AudioItem, Button, Gap } from '../../atom';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './styles';

const useStyles = makeStyles(styles);

const AudioList = ({ audioList = [], onClick, onVerification }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>Audio List</Typography>
      <Box className={classes.listSection}>
        <Gap height="26px" width="10px" />
        <Button text="Send a verified list" />
        <Gap height="26px" width="10px" />
        <List dense={false}>
          {audioList.map((audio) => (
            <AudioItem
              title={audio.title}
              onClick={onClick}
              onVerification={onVerification}
            />
          ))}

          <AudioItem title="Audio name" />
          <AudioItem title="Audio name" />
          <AudioItem title="Audio name" />
          <AudioItem title="Audio name" />
        </List>
      </Box>
    </Box>
  );
};

export default AudioList;
