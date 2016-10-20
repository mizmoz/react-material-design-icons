
import React, { PropTypes } from 'react';

const VideoLabel = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 26H6V10h36v22z"/>
    </svg>
  );
};

VideoLabel.defaultProps = {
  style: {},
  className: '',
};

VideoLabel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VideoLabel;
