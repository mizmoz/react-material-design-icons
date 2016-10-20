
import React, { PropTypes } from 'react';

const VerifiedUser = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 2L6 10v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V10L24 2zm-4 32l-8-8 2.83-2.83L20 28.34l13.17-13.17L36 18 20 34z"/>
    </svg>
  );
};

VerifiedUser.defaultProps = {
  style: {},
  className: '',
};

VerifiedUser.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VerifiedUser;
