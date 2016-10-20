
import React, { PropTypes } from 'react';

const FormatStrikethrough = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 38h8v-6h-8v6zM10 8v6h10v6h8v-6h10V8H10zM6 28h36v-4H6v4z"/>
    </svg>
  );
};

FormatStrikethrough.defaultProps = {
  style: {},
  className: '',
};

FormatStrikethrough.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatStrikethrough;
