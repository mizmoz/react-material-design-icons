
import React, { PropTypes } from 'react';

const FormatAlignJustify = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 42h36v-4H6v4zm0-8h36v-4H6v4zm0-8h36v-4H6v4zm0-8h36v-4H6v4zM6 6v4h36V6H6z"/>
    </svg>
  );
};

FormatAlignJustify.defaultProps = {
  style: {},
  className: '',
};

FormatAlignJustify.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatAlignJustify;