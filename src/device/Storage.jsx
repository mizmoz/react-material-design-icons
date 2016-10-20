
import React, { PropTypes } from 'react';

const Storage = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M4 40h40v-8H4v8zm4-6h4v4H8v-4zM4 8v8h40V8H4zm8 6H8v-4h4v4zM4 28h40v-8H4v8zm4-6h4v4H8v-4z"/>
    </svg>
  );
};

Storage.defaultProps = {
  style: {},
  className: '',
};

Storage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Storage;
