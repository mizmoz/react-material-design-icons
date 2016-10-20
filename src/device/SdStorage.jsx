
import React, { PropTypes } from 'react';

const SdStorage = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 4H20L8.04 16 8 40c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM24 16h-4V8h4v8zm6 0h-4V8h4v8zm6 0h-4V8h4v8z"/>
    </svg>
  );
};

SdStorage.defaultProps = {
  style: {},
  className: '',
};

SdStorage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SdStorage;
