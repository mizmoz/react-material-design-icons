
import React, { PropTypes } from 'react';

const BatteryCharging20 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 40v-6h-8v7.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V34h-8.8L22 40z"/>
    </svg>
  );
};

BatteryCharging20.defaultProps = {
  style: {},
  className: '',
};

BatteryCharging20.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BatteryCharging20;
