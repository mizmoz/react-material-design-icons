
import React, { PropTypes } from 'react';

const PlaylistAdd = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 20H4v4h24v-4zm0-8H4v4h24v-4zm8 16v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM4 32h16v-4H4v4z"/>
    </svg>
  );
};

PlaylistAdd.defaultProps = {
  style: {},
  className: '',
};

PlaylistAdd.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PlaylistAdd;
