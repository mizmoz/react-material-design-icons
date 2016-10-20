
import React, { PropTypes } from 'react';

const ChevronRight = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z"/>
    </svg>
  );
};

ChevronRight.defaultProps = {
  style: {},
  className: '',
};

ChevronRight.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ChevronRight;
