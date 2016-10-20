
import React, { PropTypes } from 'react';

const VideoLibrary = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 29V11l12 9-12 9z"/>
    </svg>
  );
};

VideoLibrary.defaultProps = {
  style: {},
  className: '',
};

VideoLibrary.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VideoLibrary;