
import React, { PropTypes } from 'react';

const AttachFile = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M33 12v23c0 4.42-3.58 8-8 8s-8-3.58-8-8V10c0-2.76 2.24-5 5-5s5 2.24 5 5v21c0 1.1-.89 2-2 2-1.11 0-2-.9-2-2V12h-3v19c0 2.76 2.24 5 5 5s5-2.24 5-5V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v25c0 6.08 4.93 11 11 11s11-4.92 11-11V12h-3z"/>
    </svg>
  );
};

AttachFile.defaultProps = {
  style: {},
  className: '',
};

AttachFile.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AttachFile;
