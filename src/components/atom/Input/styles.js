import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const styles = () => ({
  root: {
    height: '2.875rem',
    width: '100%',
    padding: '12px 10px 12px 20px',
    background: colors.secondary,
    boxShadow: 'inset -6px -6px 12px #FFFFFF, inset 6px 6px 12px #BEBEBE',
    borderRadius: 24,
    boxSizing: 'border-box',
    marginTop: 10,
    '& input': {
      fontFamily: fonts.nunito,
      '&::placeholder': {
        color: colors['gray-3'],
      },
    },
  },
  error: {
    margin: '7px 5px 0 0',
    textAlign: 'right',
    fontSize: 12,
    color: colors.red,
  },
});

export default styles;
