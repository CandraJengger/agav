import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const styles = (theme) => ({
  root: {
    minHeight: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.nunito,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default styles;
