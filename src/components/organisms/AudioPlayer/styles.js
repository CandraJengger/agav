import fonts from '../../../assets/fonts';
import colors from '../../../assets/theme/colors';

const styles = () => ({
  container: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
  },
  audioSection: {
    padding: '2.6rem 1.75rem',
    backgroundColor: colors.secondary,
  },
  waveWrapper: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '49px 28px 30px',
    backgroundColor: colors.secondary,
  },
  btnVerfication: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '24px',
  },
  textBtn: {
    fontFamily: fonts.nunito,
    marginLeft: '10px',
    fontWeight: 600,
    fontSize: 14,
  },
});

export default styles;
