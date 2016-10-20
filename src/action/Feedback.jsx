
import React, { PropTypes } from 'react';

const Feedback = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM26 28h-4v-4h4v4zm0-8h-4v-8h4v8z"/>
    </svg>
  );
};

Feedback.defaultProps = {
  style: {},
  className: '',
};

Feedback.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Feedback;
