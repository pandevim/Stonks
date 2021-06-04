import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStocksSuccess } from './state/actions/stocksAction';

import {
  Container,
  Button,
  CompanyLogo,
  CompanyIndex,
  CompanyEquity,
  Drag,
  Scrip,
  MarketValue,
  Entry,
  ProgressBar,
  ReturnIndicatorBar,
  Chart
} from './components';

import { BiCoinStack, BiVerticalCenter } from 'react-icons/bi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

const App = () => {
  const [marketValue, setMarketValue] = useState([]);
  const [mf, setMf] = useState(0);
  const [etf, setEtf] = useState(0);

  const data = useSelector(store => store.stocks.data);
  const currency = useSelector(store => store.stocks.data.currency);
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
        <main style={styles.main}>
          <article className="cards" style={styles.cards}>
            {data.stocks.map((stock, i) => (
              <>
                <Container>
                  <Drag />
                </Container>
                <Container>
                  <Scrip>{stock.scrip}</Scrip>
                  <MarketValue>{stock.price}</MarketValue>
                </Container>
                <Container style={{ alignItems: 'flex-start' }}>
                  <CompanyLogo />
                  <CompanyIndex name={stock.scrip} />
                  <CompanyEquity name={'US Equity'} />
                </Container>
                <Container>
                  <Entry
                    icon={<BiCoinStack />}
                    name="Quantity"
                    value={stock.quantity}
                  />
                  <Entry
                    icon={<BiVerticalCenter />}
                    name="Avg. Cost"
                    value={stock.averageCost}
                    currency={currency}
                  />
                  <Entry
                    icon={<FaRegMoneyBillAlt />}
                    name="Invested Amt."
                    value={stock.investedAmount}
                    currency={currency}
                  />
                </Container>
                <Container>
                  <Entry
                    style={{ color: 'black', fontWeight: '500' }}
                    name="Market Value"
                    value={marketValue[i]}
                    currency={currency}
                  />
                  <Entry
                    name="% of portfolio value"
                    value={stock.portfolioValuePercentage}
                    percent={true}
                  />
                  <ProgressBar value={stock.portfolioValuePercentage} />
                </Container>
                <Container>
                  <Entry
                    style={{ color: 'black', fontWeight: '500' }}
                    name="Unrealized P/L"
                    value={stock.unrealizedPAndL}
                    currency={currency}
                  />
                  <Entry
                    name="% Return"
                    value={stock.returnPercentage}
                    percent={true}
                    fact={stock.returnPercentage > 0 ? 'profit' : 'loss'}
                  />
                  <ReturnIndicatorBar value={stock.returnPercentage} />
                </Container>
                <Container>
                  <Button action="BUY" />
                  <Button action="SELL" />
                </Container>
              </>
            ))}
          </article>
          <aside className="chart" style={styles.chart}>
            <Chart mf={mf} etf={etf} />
          </aside>
        </main>
      )}
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  main: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: '1fr'
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto auto',
    gridTemplateRows: 'auto',
    margin: '10px',
    rowGap: '10px',
    backgroundColor: '#e6e6e6',
    borderRadius: '4px'
  },
  chart: {
    margin: '10px'
  }
};

export default App;
