
import React, { PropTypes } from 'react';

const VideoCall = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M34 21v-7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-7l8 8V13l-8 8zm-6 5h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"/>
    </svg>
  );
};

VideoCall.defaultProps = {
  style: {},
  className: '',
};

VideoCall.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VideoCall;
