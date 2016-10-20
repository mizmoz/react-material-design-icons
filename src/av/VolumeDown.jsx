
import React, { PropTypes } from 'react';

const VolumeDown = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z"/>
    </svg>
  );
};

VolumeDown.defaultProps = {
  style: {},
  className: '',
};

VolumeDown.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VolumeDown;
