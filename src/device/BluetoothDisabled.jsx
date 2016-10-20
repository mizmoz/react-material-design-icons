
import React, { PropTypes } from 'react';

const BluetoothDisabled = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 11.83l3.76 3.76-3.2 3.2 2.83 2.83 6.03-6.03L24 4.17h-2v10.06l4 4v-6.4zM10.83 8.17L8 11l13.17 13.17L10 35.34l2.83 2.83L22 29v15.17h2l8.59-8.59 4.59 4.59L40 37.34 10.83 8.17zM26 36.51V29l3.76 3.76L26 36.51z"/>
    </svg>
  );
};

BluetoothDisabled.defaultProps = {
  style: {},
  className: '',
};

BluetoothDisabled.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BluetoothDisabled;