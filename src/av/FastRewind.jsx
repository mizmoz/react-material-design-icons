
import React, { PropTypes } from 'react';

const FastRewind = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 36V12L5 24l17 12zm1-12l17 12V12L23 24z"/>
    </svg>
  );
};

FastRewind.defaultProps = {
  style: {},
  className: '',
};

FastRewind.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FastRewind;
