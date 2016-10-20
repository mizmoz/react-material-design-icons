
import React, { PropTypes } from 'react';

const SettingsInputHdmi = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 14V8c0-2.21-1.79-4-4-4H16c-2.21 0-4 1.79-4 4v6h-2v12l6 12v6h16v-6l6-12V14h-2zM16 8h16v6h-4v-4h-2v4h-4v-4h-2v4h-4V8z"/>
    </svg>
  );
};

SettingsInputHdmi.defaultProps = {
  style: {},
  className: '',
};

SettingsInputHdmi.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SettingsInputHdmi;
