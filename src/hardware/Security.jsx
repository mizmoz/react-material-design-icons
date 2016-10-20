
import React, { PropTypes } from 'react';

const Security = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 2L6 10v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V10L24 2zm0 21.98h14c-1.06 8.24-6.55 15.58-14 17.87V24H10V12.6l14-6.22v17.6z"/>
    </svg>
  );
};

Security.defaultProps = {
  style: {},
  className: '',
};

Security.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Security;
