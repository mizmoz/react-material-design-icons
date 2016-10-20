
import React, { PropTypes } from 'react';

const VerticalAlignBottom = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 26h-6V6h-4v20h-6l8 8 8-8zM8 38v4h32v-4H8z"/>
    </svg>
  );
};

VerticalAlignBottom.defaultProps = {
  style: {},
  className: '',
};

VerticalAlignBottom.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VerticalAlignBottom;
