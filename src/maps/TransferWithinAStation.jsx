
import React, { PropTypes } from 'react';

const TransferWithinAStation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32.99 31v-3.5l-4.99 5 4.99 5V34H44v-3zm6.02 8.5H28v3h11.01V46L44 41l-4.99-5zM19 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-7.5 6.8L6 46h4.2l3.5-16 4.3 4v12h4V30.9l-4.1-4.1 1.2-6C21.7 24 25.6 26 30 26v-4c-3.7 0-6.9-2-8.7-4.9l-1.9-3.2c-.7-1.2-2-1.9-3.4-1.9-.5 0-1 .1-1.5.3L4 16.6V26h4v-6.7l3.5-1.5"/>
    </svg>
  );
};

TransferWithinAStation.defaultProps = {
  style: {},
  className: '',
};

TransferWithinAStation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default TransferWithinAStation;
