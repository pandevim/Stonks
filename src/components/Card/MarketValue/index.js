const MarketValue = props => {
  return (
    <span className="MarketValue" style={styles.marketvalue}>
      ${props.children}
    </span>
  );
};

const styles = {
  marketvalue: {
    color: '#24a5b8',
    fontSize: '1.2em',
    fontWeight: '600'
  }
};

export default MarketValue;
