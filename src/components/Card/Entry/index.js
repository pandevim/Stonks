const Entry = ({ icon, name, value }) => {
  return (
    <div className="Entry" style={styles.entry}>
      <div style={styles.icon}>{icon}</div>
      <span>{name}</span>
      <span style={styles.value}>{value}</span>
    </div>
  );
};

const styles = {
  entry: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  value: {
    color: 'black',
    fontWeight: '500'
  },
  icon: {
    color: 'black'
  }
};

export default Entry;
