const Container = props => {
  return (
    <div className="Container" style={styles.container}>
      {props.children}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyConent: 'center',
    alignItems: 'center',
    height: '100%'
  }
};

export default Container;
