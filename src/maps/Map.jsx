
import React, { PropTypes } from 'react';

const Map = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M41 6c-.11 0-.21.01-.31.05L30 10.2 18 6 6.73 9.8c-.42.14-.73.5-.73.96V41c0 .55.45 1 1 1 .11 0 .21-.01.31-.05L18 37.8 30 42l11.28-3.79c.42-.15.72-.51.72-.97V7c0-.55-.45-1-1-1zM30 38l-12-4.21V10l12 4.21V38z"/>
    </svg>
  );
};

Map.defaultProps = {
  style: {},
  className: '',
};

Map.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Map;