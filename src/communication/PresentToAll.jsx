
import React, { PropTypes } from 'react';

const PresentToAll = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06zM20 24h-4l8-8 8 8h-4v8h-8v-8z"/>
    </svg>
  );
};

PresentToAll.defaultProps = {
  style: {},
  className: '',
};

PresentToAll.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PresentToAll;
