
import React, { PropTypes } from 'react';

const Crop75 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 14H10c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V18c0-2.21-1.79-4-4-4zm0 16H10V18h28v12z"/>
    </svg>
  );
};

Crop75.defaultProps = {
  style: {},
  className: '',
};

Crop75.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Crop75;
