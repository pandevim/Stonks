import { Container, Button } from '../';

import Scrip from './Scrip';
import MarketValue from './MarketValue';
import Drag from './Drag';
import { CompanyLogo, CompanyIndex, CompanyEquity } from './Company';
import Entry from './Entry';
import ProgressBar from './ProgressBar';
import ReturnIndicatorBar from './ReturnIndicatorBar';

import { BiCoinStack } from 'react-icons/bi';
import { BiVerticalCenter } from 'react-icons/bi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

const Card = ({ stock, marketValue, currency }) => {
  return (
    <div className="Card" style={styles.card}>
      <Container>
        <Drag />
      </Container>
      <Container style={styles.price}>
        <Scrip>{stock.scrip}</Scrip>
        <MarketValue>{stock.price}</MarketValue>
      </Container>
      <Container>
        <CompanyLogo />
        <CompanyIndex name={stock.scrip} />
        <CompanyEquity name={'US Equity'} />
      </Container>
      <Container>
        <Entry icon={<BiCoinStack />} name="Quantity" value={stock.quantity} />
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
          value={marketValue}
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
        <Entry name="% Return" value={stock.returnPercentage} percent={true} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: '10px',
    borderRadius: '4px'
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Card;
