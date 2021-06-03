import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStocksSuccess } from './state/actions/stocksAction';
import { Chart, Card } from './components';

const App = () => {
  const [marketValue, setMarketValue] = useState([]);
  const [mf, setMf] = useState(0);
  const [etf, setEtf] = useState(0);

  const data = useSelector(store => store.stocks.data);
  const loading = useSelector(store => store.stocks.loading);

  const dispatch = useDispatch();

  // Trigger Data Load
  useEffect(() => dispatch(loadStocksSuccess()), [dispatch]);

  // Generate MarketValue
  useEffect(() => {
    if (!loading) {
      setMarketValue(data.stocks.map(stock => stock.price * stock.quantity));
    }
  }, [data, loading]);

  // Generate mf and etf
  useEffect(() => {
    if (marketValue.length > 0) {
      setMf(marketValue.filter((value, i) => i <= 4).reduce((a, b) => a + b));
      setEtf(
        marketValue
          .filter((value, i) => i >= 4 && i < marketValue.length)
          .reduce((a, b) => a + b)
      );
    }
  }, [marketValue]);

  return (
    <div className="App" style={styles.app}>
      {loading && <p>loading</p>}
      {!loading && (
        <>
          <article className="cards" style={styles.cards}>
            {data.stocks.map((stock, i) => (
              <Card key={i} stock={stock} marketValue={marketValue[i]} />
            ))}
          </article>
          <aside className="chart" style={styles.chart}>
            <Chart mf={mf} etf={etf} />
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
