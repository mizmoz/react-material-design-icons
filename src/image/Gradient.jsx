
import React, { PropTypes } from 'react';

const Gradient = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 18h4v4h-4zm-4 4h4v4h-4zm8 0h4v4h-4zm4-4h4v4h-4zm-16 0h4v4h-4zM38 6H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM18 36h-4v-4h4v4zm8 0h-4v-4h4v4zm8 0h-4v-4h4v4zm4-14h-4v4h4v4h-4v-4h-4v4h-4v-4h-4v4h-4v-4h-4v4h-4v-4h4v-4h-4V10h28v12z"/>
    </svg>
  );
};

Gradient.defaultProps = {
  style: {},
  className: '',
};

Gradient.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Gradient;
