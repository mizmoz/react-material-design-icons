
import React, { PropTypes } from 'react';

const ExpandLess = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 16L12 28l2.83 2.83L24 21.66l9.17 9.17L36 28z"/>
    </svg>
  );
};

ExpandLess.defaultProps = {
  style: {},
  className: '',
};

ExpandLess.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ExpandLess;
