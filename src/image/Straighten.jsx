
import React, { PropTypes } from 'react';

const Straighten = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 12H6c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 20H6V16h4v8h4v-8h4v8h4v-8h4v8h4v-8h4v8h4v-8h4v16z"/>
    </svg>
  );
};

Straighten.defaultProps = {
  style: {},
  className: '',
};

Straighten.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Straighten;
