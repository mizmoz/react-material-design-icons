
import React, { PropTypes } from 'react';

const Subscriptions = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 16H8v-4h32v4zM36 4H12v4h24V4zm8 20v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-12 8l-12-6.53v13.06L32 32z"/>
    </svg>
  );
};

Subscriptions.defaultProps = {
  style: {},
  className: '',
};

Subscriptions.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Subscriptions;
