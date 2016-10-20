
import React, { PropTypes } from 'react';

const Favorite = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z"/>
    </svg>
  );
};

Favorite.defaultProps = {
  style: {},
  className: '',
};

Favorite.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Favorite;
