
import React, { PropTypes } from 'react';

const Payment = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V24h32v12zm0-20H8v-4h32v4z"/>
    </svg>
  );
};

Payment.defaultProps = {
  style: {},
  className: '',
};

Payment.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Payment;
