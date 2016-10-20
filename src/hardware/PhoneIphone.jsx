
import React, { PropTypes } from 'react';

const PhoneIphone = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M31 2H15c-2.76 0-5 2.24-5 5v34c0 2.76 2.24 5 5 5h16c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-8 42c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-8H14V8h18v28z"/>
    </svg>
  );
};

PhoneIphone.defaultProps = {
  style: {},
  className: '',
};

PhoneIphone.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PhoneIphone;
