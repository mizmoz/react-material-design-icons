
import React, { PropTypes } from 'react';

const Dashboard = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z"/>
    </svg>
  );
};

Dashboard.defaultProps = {
  style: {},
  className: '',
};

Dashboard.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Dashboard;
