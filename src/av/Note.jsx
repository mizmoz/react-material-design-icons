
import React, { PropTypes } from 'react';

const Note = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 20L32 8H8c-2.2 0-4 1.8-4 4v24.02C4 38.22 5.8 40 8 40l32-.02c2.2 0 4-1.78 4-3.98V20zm-14-9l11 11H30V11z"/>
    </svg>
  );
};

Note.defaultProps = {
  style: {},
  className: '',
};

Note.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Note;
