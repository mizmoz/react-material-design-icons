
import React, { PropTypes } from 'react';

const FlashOn = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 4v22h6v18l14-24h-8l8-16z"/>
    </svg>
  );
};

FlashOn.defaultProps = {
  style: {},
  className: '',
};

FlashOn.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FlashOn;
