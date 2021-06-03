const Button = ({ action }) => {
  return (
    <button className="Button" style={styles.button}>
      {action}
    </button>
  );
};

const styles = {
  button: {
    color: '#e4a77f',
    border: '2.5px solid #e4a77f',
    backgroundColor: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderRadius: '4px',
    fontWeight: '600'
  }
};

export default Button;
