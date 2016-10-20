
import React, { PropTypes } from 'react';

const FormatColorText = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill-opacity=".36" d="M0 40h48v8H0z"/>
    </svg>
  );
};

FormatColorText.defaultProps = {
  style: {},
  className: '',
};

FormatColorText.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatColorText;
