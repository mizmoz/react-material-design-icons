
import React, { PropTypes } from 'react';

const CameraRear = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 40H10v4h10v4l6-6-6-6v4zm8 0v4h10v-4H28zm6-40H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM23.99 12C21.78 12 20 10.21 20 8s1.78-4 3.99-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  );
};

CameraRear.defaultProps = {
  style: {},
  className: '',
};

CameraRear.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CameraRear;
