
import React, { PropTypes } from 'react';

const FormatAlignCenter = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 30v4h20v-4H14zM6 42h36v-4H6v4zm0-16h36v-4H6v4zm8-12v4h20v-4H14zM6 6v4h36V6H6z"/>
    </svg>
  );
};

FormatAlignCenter.defaultProps = {
  style: {},
  className: '',
};

FormatAlignCenter.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatAlignCenter;
