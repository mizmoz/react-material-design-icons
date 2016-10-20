
import React, { PropTypes } from 'react';

const FormatUnderlined = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 34c6.63 0 12-5.37 12-12V6h-5v16c0 3.87-3.13 7-7 7s-7-3.13-7-7V6h-5v16c0 6.63 5.37 12 12 12zm-14 4v4h28v-4H10z"/>
    </svg>
  );
};

FormatUnderlined.defaultProps = {
  style: {},
  className: '',
};

FormatUnderlined.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatUnderlined;
