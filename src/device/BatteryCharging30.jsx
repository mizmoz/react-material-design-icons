
import React, { PropTypes } from 'react';

const BatteryCharging30 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill-opacity=".3" d="M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V29h4l8-15v11h4l-2.13 4H34V10.67C34 9.19 32.81 8 31.33 8z"/>
    </svg>
  );
};

BatteryCharging30.defaultProps = {
  style: {},
  className: '',
};

BatteryCharging30.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BatteryCharging30;
