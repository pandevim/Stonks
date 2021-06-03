import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStocksSuccess } from './state/actions/stocksAction';
import { Home } from './layouts';
import { Stocks, Chart, Card } from './components';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.stocks.data);
  const loading = useSelector(store => store.stocks.loading);

  useEffect(() => dispatch(loadStocksSuccess()), [dispatch]);

  return (
    <div className="App">
      {!loading && (
        <Home>
          <main>
            {data.stocks.map((stock, i) => (
              <Card key={i} stock={stock} />
            ))}
          </main>
          <aside>hi</aside>
        </Home>
      )}
    </div>
  );
};

export default App;
