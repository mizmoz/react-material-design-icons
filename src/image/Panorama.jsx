
import React, { PropTypes } from 'react';

const Panorama = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M46 36V12c0-2.21-1.79-4-4-4H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4zM17 25l5 6.01L29 22l9 12H10l7-9z"/>
    </svg>
  );
};

Panorama.defaultProps = {
  style: {},
  className: '',
};

Panorama.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Panorama;
