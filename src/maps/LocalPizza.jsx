
import React, { PropTypes } from 'react';

const LocalPizza = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4c-7.13 0-13.55 3.09-17.98 8L24 44l17.99-31.99C37.56 7.09 31.14 4 24 4zM14 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm10 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  );
};

LocalPizza.defaultProps = {
  style: {},
  className: '',
};

LocalPizza.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalPizza;
