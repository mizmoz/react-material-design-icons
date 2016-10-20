
import React, { PropTypes } from 'react';

const BrightnessAuto = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M21.7 25.3h4.6L24 18l-2.3 7.3zM40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM28.6 32l-1.4-4h-6.4l-1.4 4h-3.8L22 14h4l6.4 18h-3.8z"/>
    </svg>
  );
};

BrightnessAuto.defaultProps = {
  style: {},
  className: '',
};

BrightnessAuto.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BrightnessAuto;
