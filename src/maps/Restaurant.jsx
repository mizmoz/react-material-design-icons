
import React, { PropTypes } from 'react';

const Restaurant = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z"/>
    </svg>
  );
};

Restaurant.defaultProps = {
  style: {},
  className: '',
};

Restaurant.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Restaurant;
