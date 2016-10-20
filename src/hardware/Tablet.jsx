
import React, { PropTypes } from 'react';

const Tablet = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 8H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h36c2.21 0 3.98-1.79 3.98-4L46 12c0-2.21-1.79-4-4-4zm-4 28H10V12h28v24z"/>
    </svg>
  );
};

Tablet.defaultProps = {
  style: {},
  className: '',
};

Tablet.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Tablet;
