
import React, { PropTypes } from 'react';

const SwapVerticalCircle = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zM13 18l7-7 7 7h-5v8h-4v-8h-5zm22 12l-7 7-7-7h5v-8h4v8h5z"/>
    </svg>
  );
};

SwapVerticalCircle.defaultProps = {
  style: {},
  className: '',
};

SwapVerticalCircle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SwapVerticalCircle;
