const CompanyEquity = ({ name }) => {
  return (
    <span className="CompanyEquity" style={styles.equity}>
      {name}
    </span>
  );
};

const styles = {
  equity: {
    color: 'gray',
    fontWeight: 600,
    fontSize: '.8em'
  }
};

export default CompanyEquity;
