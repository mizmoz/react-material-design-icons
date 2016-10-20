
import React, { PropTypes } from 'react';

const Laptop = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4H0v4h48v-4h-8zM8 12h32v20H8V12z"/>
    </svg>
  );
};

Laptop.defaultProps = {
  style: {},
  className: '',
};

Laptop.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Laptop;
