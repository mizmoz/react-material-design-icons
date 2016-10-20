
import React, { PropTypes } from 'react';

const FormatTextdirectionRToL = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 20v10h4V8h4v22h4V8h4V4H20c-4.42 0-8 3.58-8 8s3.58 8 8 8zm-4 14v-6l-8 8 8 8v-6h24v-4H16z"/>
    </svg>
  );
};

FormatTextdirectionRToL.defaultProps = {
  style: {},
  className: '',
};

FormatTextdirectionRToL.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatTextdirectionRToL;