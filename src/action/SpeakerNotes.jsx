
import React, { PropTypes } from 'react';

const SpeakerNotes = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM16 28h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4v-4h4v4zm14 12H20v-4h10v4zm6-6H20v-4h16v4zm0-6H20v-4h16v4z"/>
    </svg>
  );
};

SpeakerNotes.defaultProps = {
  style: {},
  className: '',
};

SpeakerNotes.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SpeakerNotes;
