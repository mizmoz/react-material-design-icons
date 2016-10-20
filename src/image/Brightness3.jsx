
import React, { PropTypes } from 'react';

const Brightness3 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 4c-2.09 0-4.11.32-6 .92C20.11 7.47 26 15.05 26 24c0 8.95-5.89 16.53-14 19.08 1.89.59 3.91.92 6 .92 11.05 0 20-8.95 20-20S29.05 4 18 4z"/>
    </svg>
  );
};

Brightness3.defaultProps = {
  style: {},
  className: '',
};

Brightness3.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Brightness3;
