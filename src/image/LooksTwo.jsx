
import React, { PropTypes } from 'react';

const LooksTwo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 16c0 2.21-1.79 4-4 4h-4v4h8v4H18v-8c0-2.21 1.79-4 4-4h4v-4h-8v-4h8c2.21 0 4 1.79 4 4v4z"/>
    </svg>
  );
};

LooksTwo.defaultProps = {
  style: {},
  className: '',
};

LooksTwo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LooksTwo;