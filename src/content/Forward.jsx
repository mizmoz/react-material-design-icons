
import React, { PropTypes } from 'react';

const Forward = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 16V8l16 16-16 16v-8H8V16z"/>
    </svg>
  );
};

Forward.defaultProps = {
  style: {},
  className: '',
};

Forward.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Forward;
