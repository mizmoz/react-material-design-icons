
import React, { PropTypes } from 'react';

const BorderStyle = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 42h4v-4h-4v4zm8 0h4v-4h-4v4zm-24 0h4v-4h-4v4zm8 0h4v-4h-4v4zm16-8h4v-4h-4v4zm0-8h4v-4h-4v4zM6 6v36h4V10h32V6H6zm32 12h4v-4h-4v4z"/>
    </svg>
  );
};

BorderStyle.defaultProps = {
  style: {},
  className: '',
};

BorderStyle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BorderStyle;
