
import React, { PropTypes } from 'react';

const Fullscreen = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"/>
    </svg>
  );
};

Fullscreen.defaultProps = {
  style: {},
  className: '',
};

Fullscreen.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Fullscreen;
