
import React, { PropTypes } from 'react';

const ArrowDropDown = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 20l10 10 10-10z"/>
    </svg>
  );
};

ArrowDropDown.defaultProps = {
  style: {},
  className: '',
};

ArrowDropDown.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArrowDropDown;
