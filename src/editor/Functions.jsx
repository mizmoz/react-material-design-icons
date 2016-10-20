
import React, { PropTypes } from 'react';

const Functions = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 8H12v4l13 12-13 12v4h24v-6H22l10-10-10-10h14z"/>
    </svg>
  );
};

Functions.defaultProps = {
  style: {},
  className: '',
};

Functions.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Functions;
