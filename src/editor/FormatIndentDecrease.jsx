
import React, { PropTypes } from 'react';

const FormatIndentDecrease = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 34h20v-4H22v4zM6 24l8 8V16l-8 8zm0 18h36v-4H6v4zM6 6v4h36V6H6zm16 12h20v-4H22v4zm0 8h20v-4H22v4z"/>
    </svg>
  );
};

FormatIndentDecrease.defaultProps = {
  style: {},
  className: '',
};

FormatIndentDecrease.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatIndentDecrease;
