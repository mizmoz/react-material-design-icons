
import React, { PropTypes } from 'react';

const Looks6 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 30h4v-4h-4v4zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 12h-8v4h4c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4h-4c-2.21 0-4-1.79-4-4V18c0-2.21 1.79-4 4-4h8v4z"/>
    </svg>
  );
};

Looks6.defaultProps = {
  style: {},
  className: '',
};

Looks6.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Looks6;