
import React, { PropTypes } from 'react';

const LockOpen = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 34c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm12-18h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12h3.8c0-3.42 2.78-6.2 6.2-6.2 3.42 0 6.2 2.78 6.2 6.2v4H12c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zm0 24H12V20h24v20z"/>
    </svg>
  );
};

LockOpen.defaultProps = {
  style: {},
  className: '',
};

LockOpen.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LockOpen;
