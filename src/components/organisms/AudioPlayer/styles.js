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
  audioControl: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

export default styles;
