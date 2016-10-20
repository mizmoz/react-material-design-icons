
import React, { PropTypes } from 'react';

const Label = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M35.27 11.69C34.54 10.67 33.35 10 32 10l-22 .02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98L32 38c1.35 0 2.54-.67 3.27-1.69L44 24l-8.73-12.31z"/>
    </svg>
  );
};

Label.defaultProps = {
  style: {},
  className: '',
};

Label.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Label;