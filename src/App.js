import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStocksSuccess } from './state/actions/stocksAction';
import { Chart, Card } from './components';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.stocks.data);
  const loading = useSelector(store => store.stocks.loading);

  useEffect(() => dispatch(loadStocksSuccess()), [dispatch]);

  return (
    <div className="App" style={styles.app}>
      {loading && <p>loading</p>}
      {!loading && (
        <>
          <article className="cards" style={styles.cards}>
            {data.stocks.map((stock, i) => (
              <Card key={i} stock={stock} />
            ))}
          </article>
          <aside className="chart" style={styles.chart}>
            <Chart />
          </aside>
        </>
      )}
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6'
  },
  cards: {
    borderRadius: '10px'
  },
  chart: {
    borderRadius: '10px'
  }
};

export default App;
