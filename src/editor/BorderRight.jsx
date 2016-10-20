
import React, { PropTypes } from 'react';

const BorderRight = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 42h4v-4h-4v4zM6 10h4V6H6v4zm8 0h4V6h-4v4zm0 16h4v-4h-4v4zM6 42h4v-4H6v4zm16 0h4v-4h-4v4zM6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm16 16h4v-4h-4v4zm8-8h4v-4h-4v4zm8-20v36h4V6h-4zm-8 36h4v-4h-4v4zm0-32h4V6h-4v4zm-8 16h4v-4h-4v4zm0-16h4V6h-4v4zm0 8h4v-4h-4v4z"/>
    </svg>
  );
};

BorderRight.defaultProps = {
  style: {},
  className: '',
};

BorderRight.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BorderRight;
