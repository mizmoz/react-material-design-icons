
import React, { PropTypes } from 'react';

const SwapCalls = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 8l-8 8h6v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V16c0-4.41-3.59-8-8-8s-8 3.59-8 8v14H4l8 8 8-8h-6V16c0-2.21 1.79-4 4-4s4 1.79 4 4v14c0 4.41 3.59 8 8 8s8-3.59 8-8V16h6l-8-8z"/>
    </svg>
  );
};

SwapCalls.defaultProps = {
  style: {},
  className: '',
};

SwapCalls.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SwapCalls;
