import logo from '../../../../assets/logo.png';

const CompanyLogo = () => {
  return <img style={styles.logo} src={logo} alt="ishares logo" />;
};

const styles = {
  logo: {
    width: '4em'
  }
};

export default CompanyLogo;
