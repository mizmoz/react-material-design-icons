
import React, { PropTypes } from 'react';

const ChevronLeft = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z"/>
    </svg>
  );
};

ChevronLeft.defaultProps = {
  style: {},
  className: '',
};

ChevronLeft.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ChevronLeft;
