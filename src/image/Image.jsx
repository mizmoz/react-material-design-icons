
import React, { PropTypes } from 'react';

const Image = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 38V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zM17 27l5 6.01L29 24l9 12H10l7-9z"/>
    </svg>
  );
};

Image.defaultProps = {
  style: {},
  className: '',
};

Image.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Image;
