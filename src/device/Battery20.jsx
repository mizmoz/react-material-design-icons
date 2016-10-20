
import React, { PropTypes } from 'react';

const Battery20 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 34v7.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V34H14z"/>
    </svg>
  );
};

Battery20.defaultProps = {
  style: {},
  className: '',
};

Battery20.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Battery20;
