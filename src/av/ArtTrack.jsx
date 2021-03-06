
import React, { PropTypes } from 'react';

const ArtTrack = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill="#010101" d="M44 26H28v-4h16v4zm0-12H28v4h16v-4zM28 34h16v-4H28v4zm-4-16v12c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4zm-3 12l-4.5-6-3.5 4.51-2.5-3.01L7 30h14z"/>
    </svg>
  );
};

ArtTrack.defaultProps = {
  style: {},
  className: '',
};

ArtTrack.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArtTrack;
