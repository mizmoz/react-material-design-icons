
import React, { PropTypes } from 'react';

const LibraryMusic = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 10h-6v11c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c1.13 0 2.16.39 3 1.02V10h8v4zM8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12z"/>
    </svg>
  );
};

LibraryMusic.defaultProps = {
  style: {},
  className: '',
};

LibraryMusic.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LibraryMusic;
