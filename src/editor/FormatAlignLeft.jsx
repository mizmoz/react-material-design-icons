
import React, { PropTypes } from 'react';

const FormatAlignLeft = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 30H6v4h24v-4zm0-16H6v4h24v-4zM6 26h36v-4H6v4zm0 16h36v-4H6v4zM6 6v4h36V6H6z"/>
    </svg>
  );
};

FormatAlignLeft.defaultProps = {
  style: {},
  className: '',
};

FormatAlignLeft.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatAlignLeft;
