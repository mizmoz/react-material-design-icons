
import React, { PropTypes } from 'react';

const Directions = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M43.41 22.59l-18-18c-.78-.78-2.05-.78-2.82 0l-18 18c-.78.78-.78 2.05 0 2.83l18 17.99v.01c.78.78 2.05.78 2.83 0l18-18c.78-.79.78-2.05-.01-2.83zM28 29v-5h-8v6h-4v-8c0-1.11.89-2 2-2h10v-5l7 7-7 7z"/>
    </svg>
  );
};

Directions.defaultProps = {
  style: {},
  className: '',
};

Directions.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Directions;