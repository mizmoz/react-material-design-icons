
import React, { PropTypes } from 'react';

const LocalBar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 10V6H6v4l16 18v10H12v4h24v-4H26V28l16-18zm-27.13 4l-3.56-4h25.38l-3.56 4H14.87z"/>
    </svg>
  );
};

LocalBar.defaultProps = {
  style: {},
  className: '',
};

LocalBar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalBar;
