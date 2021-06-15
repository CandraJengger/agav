import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const styles = () => ({
  wrapper: {
    backgroundColor: colors.secondary,
    listStyles: 'none',
    boxShadow: '-6px -6px 12px #FFFFFF, 6px 6px 12px #CCCCCC',
    borderRadius: 8,
    padding: '18px 20px',

    cursor: 'pointer',
  },
  title: {
    '& > span': {
      fontSize: 14,
      fontFamily: fonts.nunito,
      fontWeight: 'bold',
      color: colors.primary,
    },
  },
  actionSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playing: {
    color: colors.primary,
    fontSize: 12,
    fontFamily: fonts.nunito,
  },
});

export default styles;
