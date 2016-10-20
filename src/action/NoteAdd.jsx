
import React, { PropTypes } from 'react';

const NoteAdd = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 28h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4zm-6-14V7l11 11H26z"/>
    </svg>
  );
};

NoteAdd.defaultProps = {
  style: {},
  className: '',
};

NoteAdd.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NoteAdd;
