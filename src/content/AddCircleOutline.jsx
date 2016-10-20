
import React, { PropTypes } from 'react';

const AddCircleOutline = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"/>
    </svg>
  );
};

AddCircleOutline.defaultProps = {
  style: {},
  className: '',
};

AddCircleOutline.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AddCircleOutline;
