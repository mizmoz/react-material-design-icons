
import React, { PropTypes } from 'react';

const AirlineSeatLegroomReduced = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M39.94 38.41C40.31 40.32 38.85 42 37 42h-9v-6l2-8H18c-3.3 0-6-2.7-6-6V6h12v12h10c2.21 0 4 1.79 4 4l-4 14h2.89c1.45 0 2.78.98 3.05 2.41zM10 24V6H6v18c0 5.52 4.48 10 10 10h8v-4h-8c-3.31 0-6-2.69-6-6z"/>
    </svg>
  );
};

AirlineSeatLegroomReduced.defaultProps = {
  style: {},
  className: '',
};

AirlineSeatLegroomReduced.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirlineSeatLegroomReduced;