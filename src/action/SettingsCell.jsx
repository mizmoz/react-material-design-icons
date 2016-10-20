
import React, { PropTypes } from 'react';

const SettingsCell = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 48h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zM32 .02L16 0c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-3.98-4-3.98zM32 32H16V8h16v24z"/>
    </svg>
  );
};

SettingsCell.defaultProps = {
  style: {},
  className: '',
};

SettingsCell.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SettingsCell;
