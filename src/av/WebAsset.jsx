
import React, { PropTypes } from 'react';

const WebAsset = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill="#010101" d="M38 8H10c-2.22 0-4 1.8-4 4v24c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.78-4-4-4zm0 28H10V16h28v20z"/>
    </svg>
  );
};

WebAsset.defaultProps = {
  style: {},
  className: '',
};

WebAsset.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default WebAsset;
