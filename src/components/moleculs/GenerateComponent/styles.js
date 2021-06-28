import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const styles = () => ({
  root: {
    maxWidth: '500px',
    margin: '0 auto',
    paddingLeft: 39,
    paddingRight: 39,
    '& .MuiPaper-root': {
      backgroundColor: colors['gray-1'],
    },
  },
  title: {
    fontFamily: fonts.nunito,
    fontSize: 14,
    color: colors['gray-4'],
    marginRight: 9,
  },
  boxSlider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 7,
    paddingRight: 7,
    boxSizing: 'border-box',
  },
});

export const accordionStyles = () => ({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
});

export const accordionSummaryStyles = () => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: colors['gray-1'],
    border: 0,
    padding: '0 5px',
    minHeight: 30,
    '&$expanded': {
      minHeight: 30,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
});

export const accordionDetailsStyles = () => ({
  root: {
    backgroundColor: colors['gray-1'],
    padding: 0,
  },
});

export default styles;
