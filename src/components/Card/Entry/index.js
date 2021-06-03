import symbol from '../../../helpers/symbol';

const Entry = ({ icon, name, value, currency, percent }) => {
  return (
    <div className="Entry" style={styles.entry}>
      {icon && <div style={styles.icon}>{icon}</div>}
      <div style={styles.info}>
        <span>{name}</span>
        <span style={styles.value}>
          {symbol[currency]}
          {value}
          {percent && '%'}
        </span>
      </div>
    </div>
  );
};

const styles = {
  entry: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  value: {
    color: 'black',
    fontWeight: '500'
  },
  icon: {
    color: 'black',
    paddingRight: '7px'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
};

export default Entry;
