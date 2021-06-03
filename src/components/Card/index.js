import { Container, Button } from '../';

import Scrip from './Scrip';
import MarketValue from './MarketValue';
import Drag from './Drag';
import CompanyName from './CompanyName';
import Entry from './Entry';
import ProgressBar from './ProgressBar';
import ReturnIndicatorBar from './ReturnIndicatorBar';

const Card = ({ stock }) => {
  const marketValue = stock.price * stock.quantity;
  return (
    <div className="Card" style={styles.card}>
      <Container>
        <Drag />
      </Container>
      <Container>
        <Scrip>{stock.scrip}</Scrip>
        <MarketValue>{marketValue} </MarketValue>
      </Container>
      <Container>
        <CompanyName />
      </Container>
      <Container>
        <Entry name="Quantity" value={stock.quantity} />
        <Entry name="Avg. Cost" value={stock.averageCost} />
        <Entry name="Invested Amt." value={stock.investedAmount} />
      </Container>
      <Container>
        <Entry name="Market Value" value={marketValue} />
        <Entry
          name="% of portfolio value"
          value={stock.portfolioValuePercentage}
        />
        <ProgressBar value={stock.portfolioValuePercentage} />
      </Container>
      <Container>
        <Entry name="Unrealized P/L" value={stock.unrealizedPAndL} />
        <Entry name="% Return" value={stock.returnPercentage} />
        <ReturnIndicatorBar value={stock.returnPercentage} />
      </Container>
      <Container>
        <Button action="BUY" />
        <Button action="SELL" />
      </Container>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Card;
