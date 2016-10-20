
import React, { PropTypes } from 'react';

const FormatSize = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 8v6h10v24h6V14h10V8H18zM6 24h6v14h6V24h6v-6H6v6z"/>
    </svg>
  );
};

FormatSize.defaultProps = {
  style: {},
  className: '',
};

FormatSize.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatSize;