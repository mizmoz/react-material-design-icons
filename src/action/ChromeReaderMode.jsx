
import React, { PropTypes } from 'react';

const ChromeReaderMode = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 24h14v3H26zm0-5h14v3H26zm0 10h14v3H26zM42 8H6c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 30H24V12h18v26z"/>
    </svg>
  );
};

ChromeReaderMode.defaultProps = {
  style: {},
  className: '',
};

ChromeReaderMode.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ChromeReaderMode;
