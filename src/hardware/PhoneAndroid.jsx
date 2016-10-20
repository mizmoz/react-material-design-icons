
import React, { PropTypes } from 'react';

const PhoneAndroid = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 2H16c-3.31 0-6 2.69-6 6v32c0 3.31 2.69 6 6 6h16c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-4 40h-8v-2h8v2zm6.5-6h-21V8h21v28z"/>
    </svg>
  );
};

PhoneAndroid.defaultProps = {
  style: {},
  className: '',
};

PhoneAndroid.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PhoneAndroid;
