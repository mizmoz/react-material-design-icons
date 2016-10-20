
import React, { PropTypes } from 'react';

const Crop169 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 12H10c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 20H10V16h28v16z"/>
    </svg>
  );
};

Crop169.defaultProps = {
  style: {},
  className: '',
};

Crop169.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Crop169;
