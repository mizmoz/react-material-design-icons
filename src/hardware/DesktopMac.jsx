
import React, { PropTypes } from 'react';

const DesktopMac = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 4H6C3.79 4 2 5.79 2 8v24c0 2.21 1.79 4 4 4h14l-4 6v2h16v-2l-4-6h14c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 24H6V8h36v20z"/>
    </svg>
  );
};

DesktopMac.defaultProps = {
  style: {},
  className: '',
};

DesktopMac.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DesktopMac;
