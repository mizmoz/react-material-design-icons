
import React, { PropTypes } from 'react';

const LineStyle = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 32h10v-4H6v4zm13 0h10v-4H19v4zm13 0h10v-4H32v4zM6 40h4v-4H6v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zM6 24h16v-4H6v4zm20 0h16v-4H26v4zM6 8v8h36V8H6z"/>
    </svg>
  );
};

LineStyle.defaultProps = {
  style: {},
  className: '',
};

LineStyle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LineStyle;