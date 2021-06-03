import { Container, Button } from '../';

import Scrip from './Scrip';
import MarketValue from './MarketValue';
import Drag from './Drag';
import { CompanyLogo, CompanyName, CompanyClient } from './Company';
import Entry from './Entry';
import ProgressBar from './ProgressBar';
import ReturnIndicatorBar from './ReturnIndicatorBar';

const Card = ({ stock, marketValue }) => {
  return (
    <div className="Card" style={styles.card}>
      <Container>
        <Drag />
      </Container>
      <Container>
        <Scrip>{stock.scrip}</Scrip>
        <MarketValue>{stock.price}</MarketValue>
      </Container>
      <Container>
        <CompanyLogo />
        <CompanyName name={stock.scrip} />
        <CompanyClient name={'US Equity'} />
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    margin: '10px',
    borderRadius: '3px'
  }
};

export default Card;
