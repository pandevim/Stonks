import { useEffect } from 'react';

const Home = props => {
  useEffect(() => console.log(props.children.article), [props]);
  return <main className="Home">{props.children}</main>;
};

export default Home;
