const ProgressBar = ({ value }) => {
  return (
    <div className="ProgressBar">
      <progress style={styles.progress} max="100" value={value}></progress>
    </div>
  );
};

const styles = {
  progress: {}
};

export default ProgressBar;
