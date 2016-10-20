
import React, { PropTypes } from 'react';

const FormatColorFill = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M33.12 17.88L15.24 0l-2.83 2.83 4.76 4.76L6.88 17.88c-1.17 1.17-1.17 3.07 0 4.24l11 11c.58.59 1.35.88 2.12.88s1.54-.29 2.12-.88l11-11c1.17-1.17 1.17-3.07 0-4.24zM10.41 20L20 10.42 29.59 20H10.41zM38 23s-4 4.33-4 7c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.67-4-7-4-7z"/>
    </svg>
  );
};

FormatColorFill.defaultProps = {
  style: {},
  className: '',
};

FormatColorFill.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatColorFill;