
import React, { PropTypes } from 'react';

const SwitchCamera = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 8h-6.34L30 4H18l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM30 31v-5H18v5l-7-7 7-7v5h12v-5l7 7-7 7z"/>
    </svg>
  );
};

SwitchCamera.defaultProps = {
  style: {},
  className: '',
};

SwitchCamera.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SwitchCamera;
