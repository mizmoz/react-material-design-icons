
import React, { PropTypes } from 'react';

const SwapVert = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 34.02V20h-4v14.02h-6L30 42l8-7.98h-6zM18 6l-8 7.98h6V28h4V13.98h6L18 6z"/>
    </svg>
  );
};

SwapVert.defaultProps = {
  style: {},
  className: '',
};

SwapVert.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SwapVert;
