
import React, { PropTypes } from 'react';

const FormatItalic = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 8v6h4.43l-6.86 16H12v6h16v-6h-4.43l6.86-16H36V8z"/>
    </svg>
  );
};

FormatItalic.defaultProps = {
  style: {},
  className: '',
};

FormatItalic.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatItalic;
