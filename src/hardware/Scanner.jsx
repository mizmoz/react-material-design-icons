
import React, { PropTypes } from 'react';

const Scanner = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill="#fff" d="M16 34h22v4H16z"/>
    </svg>
  );
};

Scanner.defaultProps = {
  style: {},
  className: '',
};

Scanner.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Scanner;
