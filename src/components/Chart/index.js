const Chart = ({ mf, etf }) => {
  return (
    <div className="Chart" style={styles.chart}>
      {mf}
      <br />
      {etf}
    </div>
  );
};

const styles = {
  chart: {
    margin: '10px',
    backgroundColor: '#ffffff'
  }
};

export default Chart;
