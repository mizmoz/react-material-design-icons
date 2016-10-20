
import React, { PropTypes } from 'react';

const Voicemail = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M37 12c-6.08 0-11 4.92-11 11 0 2.66.94 5.1 2.51 7h-9.03c1.57-1.9 2.51-4.34 2.51-7 0-6.08-4.92-11-11-11S0 16.92 0 23s4.92 11 11 11h26c6.08 0 11-4.92 11-11s-4.92-11-11-11zM11 30c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm26 0c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
    </svg>
  );
};

Voicemail.defaultProps = {
  style: {},
  className: '',
};

Voicemail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Voicemail;
