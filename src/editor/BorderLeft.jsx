
import React, { PropTypes } from 'react';

const BorderLeft = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 42h4v-4h-4v4zm0-8h4v-4h-4v4zm0-24h4V6h-4v4zm0 8h4v-4h-4v4zm0 8h4v-4h-4v4zm-8 16h4v-4h-4v4zm0-32h4V6h-4v4zm0 16h4v-4h-4v4zM6 42h4V6H6v36zm32-24h4v-4h-4v4zm-8 24h4v-4h-4v4zm8-8h4v-4h-4v4zm0-28v4h4V6h-4zm0 20h4v-4h-4v4zm0 16h4v-4h-4v4zm-8-16h4v-4h-4v4zm0-16h4V6h-4v4z"/>
    </svg>
  );
};

BorderLeft.defaultProps = {
  style: {},
  className: '',
};

BorderLeft.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BorderLeft;