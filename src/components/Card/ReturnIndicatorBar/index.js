const ReturnIndicatorBar = ({ value }) => {
  return (
    <div className="ReturnIndicatorBar">
      <progress max="100" value={value}></progress>
    </div>
  );
};

export default ReturnIndicatorBar;
