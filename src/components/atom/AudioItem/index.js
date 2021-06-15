import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const useStyles = makeStyles(styles);

const AudioItem = ({ title, playing, isVerified, onClick, onVerification }) => {
  const classes = useStyles();

  const getColor = () => {
    if (isVerified) {
      return colors.primary;
    }

    return colors['gray-3'];
  };

  return (
    <ListItem className={classes.wrapper}>
      <ListItemText
        className={classes.title}
        primary={title}
        onClick={onClick}
      />
      <ListItemSecondaryAction className={classes.actionSection}>
        {playing && (
          <Typography component="span" className={classes.playing}>
            Playing
          </Typography>
        )}

        <IconButton
          edge="end"
          aria-label="verification"
          onClick={onVerification}
        >
          <CheckCircleOutlineIcon style={{ fontSize: 18, color: getColor() }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default AudioItem;
