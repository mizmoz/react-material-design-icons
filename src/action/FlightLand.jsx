
import React, { PropTypes } from 'react';

const FlightLand = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M5 38h38v4H5zm14.37-11.46l8.69 2.33 10.63 2.85c1.6.43 3.24-.52 3.67-2.12.43-1.6-.52-3.24-2.12-3.67l-10.63-2.85L24.1 5.04 20.23 4v16.56L10.3 17.9l-1.86-4.64-2.9-.78v10.35l3.21.86 10.62 2.85z"/>
    </svg>
  );
};

FlightLand.defaultProps = {
  style: {},
  className: '',
};

FlightLand.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FlightLand;
