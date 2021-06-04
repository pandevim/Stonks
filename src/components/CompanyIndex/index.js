const CompanyIndex = ({ name }) => {
  return (
    <span className="CompanyIndex" style={styles.name}>
      {name} Index
    </span>
  );
};

const styles = {
  name: {
    fontSize: '1em',
    fontWeight: 600,
    color: 'black'
  }
};

export default CompanyIndex;
