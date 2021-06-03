const Scrip = props => {
  return (
    <span className="Scrip" style={styles.scrip}>
      {props.children}
    </span>
  );
};

const styles = {
  scrip: {
    fontSize: '0.7em'
  }
};

export default Scrip;
