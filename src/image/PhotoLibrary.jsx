
import React, { PropTypes } from 'react';

const PhotoLibrary = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 32V8c0-2.21-1.79-4-4-4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4zm-22-8l4.06 5.42L32 22l8 10H16l6-8zM4 12v28c0 2.21 1.79 4 4 4h28v-4H8V12H4z"/>
    </svg>
  );
};

PhotoLibrary.defaultProps = {
  style: {},
  className: '',
};

PhotoLibrary.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PhotoLibrary;
