
import React, { PropTypes } from 'react';

const SettingsBackupRestore = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 24c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zM24 6C14.06 6 6 14.06 6 24H0l8 8 8-8h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.03 0-5.82-.97-8.12-2.61l-2.83 2.87C16.09 40.6 19.88 42 24 42c9.94 0 18-8.06 18-18S33.94 6 24 6z"/>
    </svg>
  );
};

SettingsBackupRestore.defaultProps = {
  style: {},
  className: '',
};

SettingsBackupRestore.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SettingsBackupRestore;
