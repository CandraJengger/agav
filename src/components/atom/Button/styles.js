const styles = () => ({
  root: {
    background: '#2F2F2F',
    borderRadius: 500,
    border: 0,
    color: '#fff',
    textTransform: 'capitalize',
    padding: '12px 56px 13px 56px',
    boxShadow: '8px 8px 15px #AFAFAF, -8px -8px 15px #FFFFFF',
    fontWeight: 600,
    fontSize: '1rem',
    '&:hover': {
      background: '#2F2F2F',
    },
    '&:disabled': {
      background: '#F5F5F5',
      color: '#BDBDBD',
    },
  },
});

export default styles;
