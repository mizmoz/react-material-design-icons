
import React, { PropTypes } from 'react';

const PermDeviceInformation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 14h-4v4h4v-4zm0 8h-4v12h4V22zm8-19.98L14 2c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28z"/>
    </svg>
  );
};

PermDeviceInformation.defaultProps = {
  style: {},
  className: '',
};

PermDeviceInformation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PermDeviceInformation;
