
import React, { PropTypes } from 'react';

const NetworkLocked = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M39 20c.34 0 .67.06 1 .1V2L2 40h26v-6c0-1.77.77-3.37 2-4.47V29c0-4.96 4.04-9 9-9zm5 12v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.66 1.34-3 3-3s3 1.34 3 3v3z"/>
    </svg>
  );
};

NetworkLocked.defaultProps = {
  style: {},
  className: '',
};

NetworkLocked.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NetworkLocked;
