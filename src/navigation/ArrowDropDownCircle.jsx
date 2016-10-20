
import React, { PropTypes } from 'react';

const ArrowDropDownCircle = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 24l-8-8h16l-8 8z"/>
    </svg>
  );
};

ArrowDropDownCircle.defaultProps = {
  style: {},
  className: '',
};

ArrowDropDownCircle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArrowDropDownCircle;
