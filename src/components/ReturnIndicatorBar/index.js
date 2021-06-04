import './index.css';

const ReturnIndicatorBar = ({ value }) => {
  return (
    <div className="ReturnIndicatorBar">
      <input
        type="range"
        min="-100"
        max="100"
        value={value}
        id={value > 0 ? 'pos' : 'neg'}
      />
    </div>
  );
};

export default ReturnIndicatorBar;
