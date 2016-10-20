
import React, { PropTypes } from 'react';

const FullscreenExit = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"/>
    </svg>
  );
};

FullscreenExit.defaultProps = {
  style: {},
  className: '',
};

FullscreenExit.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FullscreenExit;