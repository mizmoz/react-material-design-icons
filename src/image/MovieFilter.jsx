
import React, { PropTypes } from 'react';

const MovieFilter = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 8l4 6h-6l-4-6h-4l4 6h-6l-4-6h-4l4 6h-6l-4-6H8c-2.2 0-3.98 1.8-3.98 4L4 36c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V8h-8zM22.5 30.5L20 36l-2.5-5.5L12 28l5.5-2.5L20 20l2.5 5.5L28 28l-5.5 2.5zm11.38-6.62L32 28l-1.88-4.12L26 22l4.12-1.88L32 16l1.88 4.12L38 22l-4.12 1.88z"/>
    </svg>
  );
};

MovieFilter.defaultProps = {
  style: {},
  className: '',
};

MovieFilter.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default MovieFilter;
