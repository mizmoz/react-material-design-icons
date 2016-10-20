
import React, { PropTypes } from 'react';

const LineWeight = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 34h36v-4H6v4zm0 6h36v-2H6v2zm0-14h36v-6H6v6zM6 8v8h36V8H6z"/>
    </svg>
  );
};

LineWeight.defaultProps = {
  style: {},
  className: '',
};

LineWeight.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LineWeight;
