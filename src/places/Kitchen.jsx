
import React, { PropTypes } from 'react';

const Kitchen = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 4.02L12 4C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-3.98-4-3.98zM36 40H12V21.95h24V40zm0-22H12V8h24v10zm-20-8h4v6h-4zm0 14h4v10h-4z"/>
    </svg>
  );
};

Kitchen.defaultProps = {
  style: {},
  className: '',
};

Kitchen.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Kitchen;
