
import React, { PropTypes } from 'react';

const SettingsOverscan = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24.01 11L20 16h8l-3.99-5zM36 20v8l5-3.99L36 20zm-24 0l-5 4.01L12 28v-8zm16 12h-8l4.01 5L28 32zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z"/>
    </svg>
  );
};

SettingsOverscan.defaultProps = {
  style: {},
  className: '',
};

SettingsOverscan.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SettingsOverscan;
