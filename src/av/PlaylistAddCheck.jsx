
import React, { PropTypes } from 'react';

const PlaylistAddCheck = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 20H4v4h24v-4zm0-8H4v4h24v-4zM4 32h16v-4H4v4zm39-9l3 3-13.99 14L23 31l3-3 6.01 6L43 23z"/>
    </svg>
  );
};

PlaylistAddCheck.defaultProps = {
  style: {},
  className: '',
};

PlaylistAddCheck.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PlaylistAddCheck;
