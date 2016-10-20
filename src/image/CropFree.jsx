
import React, { PropTypes } from 'react';

const CropFree = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 10v8h4v-8h8V6h-8c-2.21 0-4 1.79-4 4zm4 20H6v8c0 2.21 1.79 4 4 4h8v-4h-8v-8zm28 8h-8v4h8c2.21 0 4-1.79 4-4v-8h-4v8zm0-32h-8v4h8v8h4v-8c0-2.21-1.79-4-4-4z"/>
    </svg>
  );
};

CropFree.defaultProps = {
  style: {},
  className: '',
};

CropFree.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CropFree;