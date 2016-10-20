
import React, { PropTypes } from 'react';

const LayersClear = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M39.62 29.98L42 28.13l-2.85-2.85-2.38 1.85 2.85 2.85zm-.89-9.43L42 18 24 4l-5.83 4.53 15.75 15.75 4.81-3.73zM6.55 2L4 4.55l8.44 8.44L6 18l3.26 2.53L24 32l4.19-3.26 2.85 2.85-7.06 5.49L9.24 25.61 6 28.13l18 14 9.89-7.7L41.46 42 44 39.45 6.55 2z"/>
    </svg>
  );
};

LayersClear.defaultProps = {
  style: {},
  className: '',
};

LayersClear.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LayersClear;
