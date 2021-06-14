import React from 'react';
import SliderMui from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styles, { additionalStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';

const CustomSlider = withStyles(styles)(SliderMui);

const useStyles = makeStyles(additionalStyles);

const Slider = ({ title }) => {
  const classes = useStyles();

  return (
    <>
      <Box textAlign="center" width="max-content" display="inline-block">
        <InputBase
          placeholder="0"
          inputProps={{ 'aria-label': 'link field' }}
          className={classes.input}
        />
        <div style={{ height: 85 }}>
          <CustomSlider
            valueLabelDisplay="auto"
            orientation="vertical"
            defaultValue={20}
            aria-labelledby="vertical-slider"
          />
        </div>

        <br />
        <Typography className={classes.title}>{title}</Typography>
      </Box>
    </>
  );
};

export default Slider;
