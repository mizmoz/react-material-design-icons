
import React, { PropTypes } from 'react';

const Mouse = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 2.14V18h14c0-8.16-6.11-14.88-14-15.86zM8 30c0 8.84 7.16 16 16 16s16-7.16 16-16v-8H8v8zM22 2.14C14.11 3.12 8 9.84 8 18h14V2.14z"/>
    </svg>
  );
};

Mouse.defaultProps = {
  style: {},
  className: '',
};

Mouse.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Mouse;
