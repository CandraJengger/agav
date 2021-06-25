import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const sliderStyles = () => ({
  root: {
    transform: 'translateX(-10)',
    color: colors.pink,
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: colors.white,
    marginTop: -8,
    marginLeft: -12,
    boxShadow: '-3px -3px 6px #CCCCCC, 3px 3px 6px #FFFFFF',
    '&:focus, &:hover, &$active': {
      boxShadow: '-3px -3px 6px #CCCCCC, 3px 3px 6px #FFFFFF',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    width: '6px !important',
    borderRadius: 4,
    boxShadow: '-3px -3px 6px #CCCCCC, 3px 3px 6px #FFFFFF;',
  },
  rail: {
    width: '6px !important',
    backgroundColor: colors.secondary,
    boxShadow: 'inset -3px -3px 6px #CCCCCC, inset 3px 3px 6px #FFFFFF;',
    borderRadius: 4,
  },
});

export const additionalStyles = () => ({
  title: {
    color: colors.primary,
    textTransform: 'capitalize',
    fontSize: '0.75rem',
    textAlign: 'center',
    width: 47,
    fontFamily: fonts.nunito,
  },
  input: {
    width: 45,
    height: 32,
    padding: '6px 10px',
    backgroundColor: colors.secondary,
    boxShadow: 'inset 3px 3px 6px #CCCCCC, inset -3px -3px 6px #FFFFFF',
    borderRadius: 4,
    fontSize: 14,
    color: colors.primary,
    marginBottom: 10,
    '&::placeholder': {
      color: colors['gray-3'],
    },
  },
});

export default sliderStyles;
