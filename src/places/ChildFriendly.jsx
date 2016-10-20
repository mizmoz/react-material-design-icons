
import React, { PropTypes } from 'react';

const ChildFriendly = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 4v16h16c0-8.84-7.16-16-16-16zm12.65 27.78C40.74 29.07 42 25.69 42 22H12.88l-1.9-4H4v4h4.45s3.78 8.14 4.24 8.83C10.49 32.02 9 34.33 9 37c0 3.87 3.13 7 7 7 3.53 0 6.43-2.61 6.92-6h4.16c.49 3.39 3.39 6 6.92 6 3.87 0 7-3.13 7-7 0-2.08-.91-3.94-2.35-5.22zM16 40c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>
  );
};

ChildFriendly.defaultProps = {
  style: {},
  className: '',
};

ChildFriendly.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ChildFriendly;
