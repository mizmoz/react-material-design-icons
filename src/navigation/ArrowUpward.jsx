
import React, { PropTypes } from 'react';

const ArrowUpward = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"/>
    </svg>
  );
};

ArrowUpward.defaultProps = {
  style: {},
  className: '',
};

ArrowUpward.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArrowUpward;
