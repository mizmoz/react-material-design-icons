
import React, { PropTypes } from 'react';

const PhoneBluetoothSpeaker = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M29.41 19L34 14.41V22h1l5.71-5.71-4.3-4.29 4.29-4.29L35 2h-1v7.59L29.41 5 28 6.41 33.59 12 28 17.59 29.41 19zM36 5.83l1.88 1.88L36 9.59V5.83zm0 8.58l1.88 1.88L36 18.17v-3.76zM40 31c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2z"/>
    </svg>
  );
};

PhoneBluetoothSpeaker.defaultProps = {
  style: {},
  className: '',
};

PhoneBluetoothSpeaker.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PhoneBluetoothSpeaker;
