
import React, { PropTypes } from 'react';

const FormatIndentIncrease = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 42h36v-4H6v4zm0-26v16l8-8-8-8zm16 18h20v-4H22v4zM6 6v4h36V6H6zm16 12h20v-4H22v4zm0 8h20v-4H22v4z"/>
    </svg>
  );
};

FormatIndentIncrease.defaultProps = {
  style: {},
  className: '',
};

FormatIndentIncrease.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatIndentIncrease;
