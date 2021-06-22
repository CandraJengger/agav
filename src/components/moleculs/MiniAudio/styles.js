import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const styles = () => ({
  wrapper: {
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: '12px 12px 0px 0px',
    padding: '25px 20px',
    boxSizing: 'border-box',
  },
  title: {
    color: colors.secondary,
    fontWeight: 600,
    fontSize: 14,
    fontFamily: fonts.nunito,
  },
  subTitle: {
    color: colors['gray-3'],
    fontWeight: 400,
    fontSize: 10,
    fontFamily: fonts.nunito,
  },
});

export default styles;
