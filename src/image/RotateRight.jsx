
import React, { PropTypes } from 'react';

const RotateRight = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M31.1 11.1L22 2v6.14C14.11 9.12 8 15.84 8 24s6.11 14.88 14 15.86v-4.04c-5.67-.95-10-5.88-10-11.82s4.33-10.87 10-11.82V20l9.1-8.9zM39.86 22c-.34-2.78-1.45-5.46-3.25-7.78l-2.83 2.83c1.07 1.51 1.75 3.2 2.04 4.95h4.04zM26 35.81v4.05c2.78-.34 5.48-1.42 7.8-3.22l-2.87-2.87c-1.5 1.06-3.18 1.74-4.93 2.04zm7.78-4.86l2.83 2.83c1.8-2.32 2.91-5 3.25-7.78h-4.04c-.29 1.75-.97 3.44-2.04 4.95z"/>
    </svg>
  );
};

RotateRight.defaultProps = {
  style: {},
  className: '',
};

RotateRight.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RotateRight;