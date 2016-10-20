
import React, { PropTypes } from 'react';

const Exposure = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 34v4h4v-4h4v-4h-4v-4h-4v4h-4v4h4zM40 4H8C5.79 4 4 5.79 4 8v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-30 6h12v4H10v-4zm30 30H8L40 8v32z"/>
    </svg>
  );
};

Exposure.defaultProps = {
  style: {},
  className: '',
};

Exposure.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Exposure;
