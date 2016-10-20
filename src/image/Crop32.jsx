
import React, { PropTypes } from 'react';

const Crop32 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H10V12h28v24z"/>
    </svg>
  );
};

Crop32.defaultProps = {
  style: {},
  className: '',
};

Crop32.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Crop32;
