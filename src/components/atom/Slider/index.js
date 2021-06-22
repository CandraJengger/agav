import React from 'react';
import SliderMui from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styles, { additionalStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';

const CustomSlider = withStyles(styles)(SliderMui);

const useStyles = makeStyles(additionalStyles);

const Slider = ({ title, onChange }) => {
  const [value, setValue] = React.useState(100);
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    onChange({ name: title.replace(' ', '-'), value: newValue });
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    onChange({
      name: title.replace(' ', '-'),
      value: event.target.value === '' ? '' : Number(event.target.value),
    });
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 255) {
      setValue(255);
    }
  };

  return (
    <>
      <Box textAlign="center" width="max-content" display="inline-block">
        <InputBase
          placeholder="0"
          inputProps={{ 'aria-label': 'link field' }}
          className={classes.input}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        <div style={{ height: 85 }}>
          <CustomSlider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            orientation="vertical"
            defaultValue={100}
            max={255}
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
