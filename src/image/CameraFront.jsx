
import React, { PropTypes } from 'react';

const CameraFront = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 40H10v4h10v4l6-6-6-6v4zm8 0v4h10v-4H28zm-4-24c2.21 0 4-1.79 4-4s-1.79-4-4-4-3.99 1.79-3.99 4c.01 2.21 1.78 4 3.99 4zM34 0H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM14 4h20v21c0-3.33-6.67-5-10-5s-10 1.67-10 5V4z"/>
    </svg>
  );
};

CameraFront.defaultProps = {
  style: {},
  className: '',
};

CameraFront.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CameraFront;
