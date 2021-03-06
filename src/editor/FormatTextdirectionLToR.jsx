
import React, { PropTypes } from 'react';

const FormatTextdirectionLToR = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 20v10h4V8h4v22h4V8h4V4H18c-4.42 0-8 3.58-8 8s3.58 8 8 8zm24 16l-8-8v6H10v4h24v6l8-8z"/>
    </svg>
  );
};

FormatTextdirectionLToR.defaultProps = {
  style: {},
  className: '',
};

FormatTextdirectionLToR.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatTextdirectionLToR;
