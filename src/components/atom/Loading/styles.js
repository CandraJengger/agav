import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const styles = () => ({
  wrapper: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontWeight: 500,
    fontFamily: fonts.nunito,
    marginTop: 20,
    fontSize: 14,
    color: colors.primary,
  },
  loading: {
    color: colors.pink,
  },
});

export default styles;
