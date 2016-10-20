
import React, { PropTypes } from 'react';

const Subtitles = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
    </svg>
  );
};

Subtitles.defaultProps = {
  style: {},
  className: '',
};

Subtitles.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Subtitles;
