
import React, { PropTypes } from 'react';

const PermMedia = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M4 12H0v10h.02L0 40c0 2.21 1.79 4 4 4h36v-4H4V12zm40-4H28l-4-4H12C9.79 4 8.02 5.79 8.02 8L8 32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM14 30l9-12 7 9.01L35 21l7 9H14z"/>
    </svg>
  );
};

PermMedia.defaultProps = {
  style: {},
  className: '',
};

PermMedia.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PermMedia;
