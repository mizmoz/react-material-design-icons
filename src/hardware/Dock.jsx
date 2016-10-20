
import React, { PropTypes } from 'react';

const Dock = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M16 46h16v-4H16v4zM32 2.02L16 2c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM32 30H16V10h16v20z"/>
    </svg>
  );
};

Dock.defaultProps = {
  style: {},
  className: '',
};

Dock.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Dock;
