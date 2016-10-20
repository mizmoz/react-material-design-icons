
import React, { PropTypes } from 'react';

const FlashAuto = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 4v24h6v18l14-24h-8l8-18H6zm32 0h-4l-6.4 18h3.8l1.4-4h6.4l1.4 4h3.8L38 4zm-4.3 11.3L36 8l2.3 7.3h-4.6z"/>
    </svg>
  );
};

FlashAuto.defaultProps = {
  style: {},
  className: '',
};

FlashAuto.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FlashAuto;
