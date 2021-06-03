import { Container } from '../';

import Scrip from './Scrip';
import MarketValue from './MarketValue';
import Drag from './Drag';
import CompanyName from './CompanyName';

const Card = ({ stock }) => {
  return (
    <div className="Card">
      <Container>
        <Drag />
      </Container>
      <Container>
        <Scrip>{stock.scrip}</Scrip>
        <MarketValue>{stock.price * stock.quantity} </MarketValue>
      </Container>
      <Container>
        <CompanyName />
      </Container>
    </div>
  );
};

export default Card;
