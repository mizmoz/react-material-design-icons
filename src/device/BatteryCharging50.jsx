
import React, { PropTypes } from 'react';

const BatteryCharging50 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28.93 27L22 40V29h-4l1.07-2H14v14.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V27h-5.08z"/>
    </svg>
  );
};

BatteryCharging50.defaultProps = {
  style: {},
  className: '',
};

BatteryCharging50.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BatteryCharging50;
