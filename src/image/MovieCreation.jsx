
import React, { PropTypes } from 'react';

const MovieCreation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 8l4 8h-6l-4-8h-4l4 8h-6l-4-8h-4l4 8h-6l-4-8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8h-8z"/>
    </svg>
  );
};

MovieCreation.defaultProps = {
  style: {},
  className: '',
};

MovieCreation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default MovieCreation;
