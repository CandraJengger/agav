import React from 'react';
import Box from '@material-ui/core/Box';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Input, Button, Slider, Gap } from '../../atom';

// styles
import styles, {
  accordionDetailsStyles,
  accordionStyles,
  accordionSummaryStyles,
} from './styles';

// image
import ArrowIcon from '../../../assets/images/arrow.svg';

const Accordion = withStyles(accordionStyles)(MuiAccordion);

const AccordionSummary = withStyles(accordionSummaryStyles)(
  MuiAccordionSummary
);

const AccordionDetails = withStyles(accordionDetailsStyles)(
  MuiAccordionDetails
);

const useStyles = makeStyles(styles);

const GenerateComponent = ({ form, onChange, onSubmit }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getRotation = () => {
    if (expanded === 'parameterPanel') {
      return 'rotateX(0)';
    }

    return 'rotateX(180deg)';
  };

  return (
    <Box component="section" textAlign="center" className={classes.root}>
      <Input onChange={onChange} />
      <Accordion
        square
        expanded={expanded === 'parameterPanel'}
        onChange={handleChange('parameterPanel')}
      >
        <AccordionSummary aria-controls="parameter-content" id="parameterId">
          <Typography className={classes.title}>Parameter</Typography>
          <img
            src={ArrowIcon}
            alt=""
            style={{
              transform: getRotation(),
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.boxSlider}>
            <Slider title="sample rate" onChange={onChange} />
            <Slider title="min duration" onChange={onChange} />
            <Slider title="max duration" onChange={onChange} />
            <Slider title="frames" onChange={onChange} />
            <Slider title="threshold" onChange={onChange} />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Gap
        height={expanded === 'parameterPanel' ? '66px' : '12px'}
        width="10px"
      />
      <Button text="Generate" onClick={onSubmit} />
    </Box>
  );
};

export default GenerateComponent;
