
import React, { PropTypes } from 'react';

const BorderClear = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 10h4V6h-4v4zm0 16h4v-4h-4v4zm0 16h4v-4h-4v4zm8-8h4v-4h-4v4zm0 8h4v-4h-4v4zM6 42h4v-4H6v4zm0-8h4v-4H6v4zm0-8h4v-4H6v4zm0-8h4v-4H6v4zm0-8h4V6H6v4zm16 16h4v-4h-4v4zm16 8h4v-4h-4v4zm0-8h4v-4h-4v4zm0 16h4v-4h-4v4zm0-24h4v-4h-4v4zm-16 0h4v-4h-4v4zM38 6v4h4V6h-4zm-16 4h4V6h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm0-16h4V6h-4v4z"/>
    </svg>
  );
};

BorderClear.defaultProps = {
  style: {},
  className: '',
};

BorderClear.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BorderClear;
