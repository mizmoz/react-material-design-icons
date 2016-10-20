
import React, { PropTypes } from 'react';

const MusicNote = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 6v21.11c-1.18-.69-2.54-1.11-4-1.11-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8V14h8V6H24z"/>
    </svg>
  );
};

MusicNote.defaultProps = {
  style: {},
  className: '',
};

MusicNote.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default MusicNote;
