
import React, { PropTypes } from 'react';

const Looks3 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38.01 6h-28c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 15c0 1.66-1.34 3-3 3 1.66 0 3 1.34 3 3v3c0 2.21-1.79 4-4 4h-8v-4h8v-4h-4v-4h4v-4h-8v-4h8c2.21 0 4 1.79 4 4v3z"/>
    </svg>
  );
};

Looks3.defaultProps = {
  style: {},
  className: '',
};

Looks3.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Looks3;
