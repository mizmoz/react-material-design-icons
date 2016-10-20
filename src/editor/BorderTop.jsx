
import React, { PropTypes } from 'react';

const BorderTop = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 42h4v-4h-4v4zm0-16h4v-4h-4v4zm8 0h4v-4h-4v4zm0 16h4v-4h-4v4zM6 34h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm0-8h4v-4H6v4zm16 16h4v-4h-4v4zm16-16h4v-4h-4v4zm0 8h4v-4h-4v4zM6 6v4h36V6H6zm32 28h4v-4h-4v4zm-8 8h4v-4h-4v4zm-8-24h4v-4h-4v4zm16 24h4v-4h-4v4zm-8-16h4v-4h-4v4z"/>
    </svg>
  );
};

BorderTop.defaultProps = {
  style: {},
  className: '',
};

BorderTop.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BorderTop;
