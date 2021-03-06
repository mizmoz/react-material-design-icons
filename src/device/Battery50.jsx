
import React, { PropTypes } from 'react';

const Battery50 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill-opacity=".3" d="M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V26h20V10.67z"/>
    </svg>
  );
};

Battery50.defaultProps = {
  style: {},
  className: '',
};

Battery50.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Battery50;
