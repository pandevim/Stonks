import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStocksSuccess } from './state/actions/stocksAction';
import { Home } from './layouts';
import { Chart, Card } from './components';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.stocks.data);
  const loading = useSelector(store => store.stocks.loading);

  useEffect(() => dispatch(loadStocksSuccess()), [dispatch]);

  return (
    <div className="App">
      {loading && <p>loading</p>}
      {!loading && (
        <Home>
          <article>
            {data.stocks.map((stock, i) => (
              <Card key={i} stock={stock} />
            ))}
          </article>
          <aside>
            <Chart />
          </aside>
        </Home>
      )}
    </div>
  );
};

export default App;
