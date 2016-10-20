
import React, { PropTypes } from 'react';

const Headset = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z"/>
    </svg>
  );
};

Headset.defaultProps = {
  style: {},
  className: '',
};

Headset.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Headset;
