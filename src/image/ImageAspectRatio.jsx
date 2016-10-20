
import React, { PropTypes } from 'react';

const ImageAspectRatio = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 20h-4v4h4v-4zm0 8h-4v4h4v-4zm-16-8h-4v4h4v-4zm8 0h-4v4h4v-4zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V12h32v24z"/>
    </svg>
  );
};

ImageAspectRatio.defaultProps = {
  style: {},
  className: '',
};

ImageAspectRatio.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ImageAspectRatio;
