
import React, { PropTypes } from 'react';

const ConfirmationNumber = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 20v-8c0-2.21-1.79-4-4-4H8c-2.21 0-3.98 1.79-3.98 4v8c2.2.01 3.98 1.8 3.98 4 0 2.21-1.79 4-3.99 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-8c-2.21 0-4-1.79-4-4s1.79-4 4-4zM26 35h-4v-4h4v4zm0-9h-4v-4h4v4zm0-9h-4v-4h4v4z"/>
    </svg>
  );
};

ConfirmationNumber.defaultProps = {
  style: {},
  className: '',
};

ConfirmationNumber.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ConfirmationNumber;
