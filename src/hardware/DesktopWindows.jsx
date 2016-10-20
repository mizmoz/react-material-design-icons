
import React, { PropTypes } from 'react';

const DesktopWindows = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 4H6C3.79 4 2 5.79 2 8v24c0 2.21 1.79 4 4 4h14v4h-4v4h16v-4h-4v-4h14c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H6V8h36v24z"/>
    </svg>
  );
};

DesktopWindows.defaultProps = {
  style: {},
  className: '',
};

DesktopWindows.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DesktopWindows;
