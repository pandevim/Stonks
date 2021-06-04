const Container = props => {
  return (
    <div className="Container" style={{ ...styles.container, ...props.style }}>
      {props.children}
    </div>
  );
};

const styles = {
  container: {
    color: '#b0b0b0',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '4px'
  }
};

export default Container;
