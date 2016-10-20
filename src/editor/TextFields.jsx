
import React, { PropTypes } from 'react';

const TextFields = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M5 8v6h10v24h6V14h10V8H5zm38 10H25v6h6v14h6V24h6v-6z"/>
    </svg>
  );
};

TextFields.defaultProps = {
  style: {},
  className: '',
};

TextFields.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default TextFields;
