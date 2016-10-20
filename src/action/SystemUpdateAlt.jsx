
import React, { PropTypes } from 'react';

const SystemUpdateAlt = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 32.5l8-8h-6v-18h-4v18h-6l8 8zm18-26H30v3.97h12v28.06H6V10.47h12V6.5H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z"/>
    </svg>
  );
};

SystemUpdateAlt.defaultProps = {
  style: {},
  className: '',
};

SystemUpdateAlt.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SystemUpdateAlt;
