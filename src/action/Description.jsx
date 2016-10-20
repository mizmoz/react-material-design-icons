
import React, { PropTypes } from 'react';

const Description = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 32H16v-4h16v4zm0-8H16v-4h16v4zm-6-10V7l11 11H26z"/>
    </svg>
  );
};

Description.defaultProps = {
  style: {},
  className: '',
};

Description.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Description;
