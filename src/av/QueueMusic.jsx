
import React, { PropTypes } from 'react';

const QueueMusic = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 12H6v4h24v-4zm0 8H6v4h24v-4zM6 32h16v-4H6v4zm28-20v16.37c-.63-.23-1.29-.37-2-.37-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6V16h6v-4H34z"/>
    </svg>
  );
};

QueueMusic.defaultProps = {
  style: {},
  className: '',
};

QueueMusic.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default QueueMusic;
