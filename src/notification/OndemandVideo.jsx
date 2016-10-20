
import React, { PropTypes } from 'react';

const OndemandVideo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zM32 22l-14 8V14z"/>
    </svg>
  );
};

OndemandVideo.defaultProps = {
  style: {},
  className: '',
};

OndemandVideo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default OndemandVideo;
