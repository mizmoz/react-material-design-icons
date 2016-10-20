
import React, { PropTypes } from 'react';

const Home = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"/>
    </svg>
  );
};

Home.defaultProps = {
  style: {},
  className: '',
};

Home.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Home;
