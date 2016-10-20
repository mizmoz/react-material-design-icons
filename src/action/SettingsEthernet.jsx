
import React, { PropTypes } from 'react';

const SettingsEthernet = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M15.54 13.52l-3.08-2.55L1.64 24l10.82 13.04 3.08-2.55L6.84 24l8.7-10.48zM14 26h4v-4h-4v4zm20-4h-4v4h4v-4zm-12 4h4v-4h-4v4zm13.54-15.04l-3.08 2.55L41.16 24l-8.7 10.48 3.08 2.55L46.36 24 35.54 10.96z"/>
    </svg>
  );
};

SettingsEthernet.defaultProps = {
  style: {},
  className: '',
};

SettingsEthernet.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SettingsEthernet;
