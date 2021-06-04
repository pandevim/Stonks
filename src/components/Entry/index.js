import symbol from '../../helpers/symbol';

import { BsCaretUpFill } from 'react-icons/bs';
import { BsCaretDownFill } from 'react-icons/bs';

const Entry = ({ icon, name, value, currency, percent, style, fact }) => {
  return (
    <div className="Entry" style={{ ...style, ...styles.entry }}>
      {icon && <div style={styles.icon}>{icon}</div>}
      <div style={styles.info}>
        <span>{name}</span>
        &nbsp; &nbsp;
        <span style={styles.value}>
          {fact === 'profit' && <BsCaretUpFill color="green" />}
          {fact === 'loss' && <BsCaretDownFill color="red" />}
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
    width: '100%',
    fontSize: '.8em'
  },
  value: {
    color: 'black',
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: 'black',
    paddingRight: '7px'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
};

export default Entry;
