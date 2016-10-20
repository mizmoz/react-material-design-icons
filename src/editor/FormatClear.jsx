
import React, { PropTypes } from 'react';

const FormatClear = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6.54 10L4 12.55l13.94 13.94L13 38h6l3.14-7.32L33.46 42 36 39.45 7.09 10.55 6.54 10zM12 10v.36L17.64 16h4.79l-1.44 3.35 4.2 4.2L28.43 16H40v-6H12z"/>
    </svg>
  );
};

FormatClear.defaultProps = {
  style: {},
  className: '',
};

FormatClear.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatClear;