const ProgressBar = ({ value }) => {
  return (
    <div className="ProgressBar">
      <progress max="100" value={value}></progress>
    </div>
  );
};

export default ProgressBar;
