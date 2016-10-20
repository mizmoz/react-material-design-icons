
import React, { PropTypes } from 'react';

const ViewCarousel = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 38h20V8H14v30zM4 34h8V12H4v22zm32-22v22h8V12h-8z"/>
    </svg>
  );
};

ViewCarousel.defaultProps = {
  style: {},
  className: '',
};

ViewCarousel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewCarousel;
