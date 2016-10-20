
import React, { PropTypes } from 'react';

const Code = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18.8 33.2L9.7 24l9.2-9.2L16 12 4 24l12 12 2.8-2.8zm10.4 0l9.2-9.2-9.2-9.2L32 12l12 12-12 12-2.8-2.8z"/>
    </svg>
  );
};

Code.defaultProps = {
  style: {},
  className: '',
};

Code.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Code;
