
import React, { PropTypes } from 'react';

const LocalCafe = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 6H8v20c0 4.42 3.58 8 8 8h12c4.42 0 8-3.58 8-8v-6h4c2.21 0 4-1.79 4-4v-6c0-2.21-1.79-4-4-4zm0 10h-4v-6h4v6zM4 42h36v-4H4v4z"/>
    </svg>
  );
};

LocalCafe.defaultProps = {
  style: {},
  className: '',
};

LocalCafe.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalCafe;
