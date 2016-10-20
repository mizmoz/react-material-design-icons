
import React, { PropTypes } from 'react';

const Receipt = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 34H12v-4h24v4zm0-8H12v-4h24v4zm0-8H12v-4h24v4zM6 44l3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3V4l-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3v40z"/>
    </svg>
  );
};

Receipt.defaultProps = {
  style: {},
  className: '',
};

Receipt.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Receipt;
