
import React, { PropTypes } from 'react';

const AvTimer = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 34c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm0-28v8h4v-3.84c6.78.97 12 6.79 12 13.84 0 7.73-6.27 14-14 14s-14-6.27-14-14c0-3.36 1.18-6.43 3.15-8.85L24 26l2.83-2.83-13.6-13.6-.02.04C8.84 12.89 6 18.11 6 24c0 9.94 8.04 18 17.99 18S42 33.94 42 24 33.94 6 23.99 6H22zm14 18c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-24 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
    </svg>
  );
};

AvTimer.defaultProps = {
  style: {},
  className: '',
};

AvTimer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AvTimer;
