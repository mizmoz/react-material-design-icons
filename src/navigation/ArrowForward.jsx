
import React, { PropTypes } from 'react';

const ArrowForward = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 8l-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z"/>
    </svg>
  );
};

ArrowForward.defaultProps = {
  style: {},
  className: '',
};

ArrowForward.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArrowForward;
