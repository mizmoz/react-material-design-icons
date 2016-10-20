
import React, { PropTypes } from 'react';

const Polymer = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 8h-8L14.21 33.26 9 24l9-16h-8L1 24l9 16h8l15.79-25.26L39 24l-9 16h8l9-16z"/>
    </svg>
  );
};

Polymer.defaultProps = {
  style: {},
  className: '',
};

Polymer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Polymer;
