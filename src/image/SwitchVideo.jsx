
import React, { PropTypes } from 'react';

const SwitchVideo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 19v-7c0-1.1-.89-2-2-2H6c-1.11 0-2 .9-2 2v24c0 1.1.89 2 2 2h28c1.11 0 2-.9 2-2v-7l8 8V11l-8 8zM26 31v-5H14v5l-7-7 7-7v5h12v-5l7 7-7 7z"/>
    </svg>
  );
};

SwitchVideo.defaultProps = {
  style: {},
  className: '',
};

SwitchVideo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SwitchVideo;
