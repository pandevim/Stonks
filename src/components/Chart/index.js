import { Doughnut } from 'react-chartjs-2';

import { IoMdArrowDropdown } from 'react-icons/io';

const options = {
  cutoutPercentage: 40,
  responsive: true,
  plugins: {
    legend: {
      position: 'right'
    }
  }
};

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
      <div style={styles.header}>
        <span style={styles.heading}>Portfolio</span>
        <div style={styles.software}>
          <span>Asset-wise</span>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div style={styles.doughnut}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

const styles = {
  chart: {
    margin: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    padding: '10px',
    minWidth: 300
  },
  doughnut: {
    width: 250
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px'
  },
  heading: {
    fontSize: '1.3em',
    fontWeight: 600
  }
};

export default Chart;
