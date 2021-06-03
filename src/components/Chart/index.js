import { Doughnut } from 'react-chartjs-2';

const Chart = ({ mf, etf }) => {
  const data = {
    labels: ['Mutual Funds', 'ETFs'],
    datasets: [
      {
        label: 'Portfolio',
        data: [mf, etf],
        backgroundColor: ['#5dbad6', '#a89853'],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="Chart" style={styles.chart}>
      <Doughnut data={data} />
    </div>
  );
};

const styles = {
  chart: {
    margin: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '4px'
  }
};

export default Chart;
