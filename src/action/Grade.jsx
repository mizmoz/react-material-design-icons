
import React, { PropTypes } from 'react';

const Grade = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 34.54L36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"/>
    </svg>
  );
};

Grade.defaultProps = {
  style: {},
  className: '',
};

Grade.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Grade;