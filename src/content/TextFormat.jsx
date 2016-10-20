
import React, { PropTypes } from 'react';

const TextFormat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 34v4h28v-4H10zm9-8.4h10l1.8 4.4H35L25.5 8h-3L13 30h4.2l1.8-4.4zm5-13.64L27.74 22h-7.48L24 11.96z"/>
    </svg>
  );
};

TextFormat.defaultProps = {
  style: {},
  className: '',
};

TextFormat.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default TextFormat;
