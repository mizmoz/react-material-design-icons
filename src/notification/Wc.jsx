
import React, { PropTypes } from 'react';

const Wc = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M11 44V29H8V18c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4v11h-3v15h-8zm25 0V32h6l-5.09-15.26C36.37 15.1 34.84 14 33.12 14h-.23c-1.72 0-3.25 1.1-3.79 2.74L24 32h6v12h6zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm18 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
    </svg>
  );
};

Wc.defaultProps = {
  style: {},
  className: '',
};

Wc.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Wc;