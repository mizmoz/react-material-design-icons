
import React, { PropTypes } from 'react';

const Filter7 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zm-16-4l8-16v-4H22v4h8l-8 16h4z"/>
    </svg>
  );
};

Filter7.defaultProps = {
  style: {},
  className: '',
};

Filter7.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Filter7;
