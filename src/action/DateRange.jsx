
import React, { PropTypes } from 'react';

const DateRange = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 22h-4v4h4v-4zm8 0h-4v4h4v-4zm8 0h-4v4h4v-4zm4-14h-2V4h-4v4H16V4h-4v4h-2c-2.22 0-3.98 1.8-3.98 4L6 40c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 32H10V18h28v22z"/>
    </svg>
  );
};

DateRange.defaultProps = {
  style: {},
  className: '',
};

DateRange.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DateRange;
