
import React, { PropTypes } from 'react';

const LaptopMac = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 36c2.21 0 3.98-1.79 3.98-4L44 10c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v22c0 2.21 1.79 4 4 4H0c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4h-8zM8 10h32v22H8V10zm16 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  );
};

LaptopMac.defaultProps = {
  style: {},
  className: '',
};

LaptopMac.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LaptopMac;