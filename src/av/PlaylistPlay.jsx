
import React, { PropTypes } from 'react';

const PlaylistPlay = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 6H-8v4h34V6zm0-8H-8v4h34v-4zM-8 18h26v-4H-8v4zm30-4v12l10-6-10-6z"/>
    </svg>
  );
};

PlaylistPlay.defaultProps = {
  style: {},
  className: '',
};

PlaylistPlay.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PlaylistPlay;
