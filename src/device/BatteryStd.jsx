
import React, { PropTypes } from 'react';

const BatteryStd = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8z"/>
    </svg>
  );
};

BatteryStd.defaultProps = {
  style: {},
  className: '',
};

BatteryStd.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BatteryStd;