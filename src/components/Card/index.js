const Card = ({ stock }) => {
  return (
    <div className="Card">
      <span>{stock.scrip}</span>
    </div>
  );
};

export default Card;
