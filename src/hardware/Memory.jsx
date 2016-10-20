
import React, { PropTypes } from 'react';

const Memory = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 18H18v12h12V18zm-4 8h-4v-4h4v4zm16-4v-4h-4v-4c0-2.21-1.79-4-4-4h-4V6h-4v4h-4V6h-4v4h-4c-2.21 0-4 1.79-4 4v4H6v4h4v4H6v4h4v4c0 2.21 1.79 4 4 4h4v4h4v-4h4v4h4v-4h4c2.21 0 4-1.79 4-4v-4h4v-4h-4v-4h4zm-8 12H14V14h20v20z"/>
    </svg>
  );
};

Memory.defaultProps = {
  style: {},
  className: '',
};

Memory.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Memory;
