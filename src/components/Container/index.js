const Container = props => {
  return (
    <div className="Container" style={{ ...styles.container, ...props.style }}>
      {props.children}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyConent: 'center',
    alignItems: 'flex-start',
    padding: '10px',
    color: '#b0b0b0',
    margin: '5px'
  }
};

export default Container;
