
import React, { PropTypes } from 'react';

const School = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 26.36v8L24 42l14-7.64v-8L24 34l-14-7.64zM24 6L2 18l22 12 18-9.82V34h4V18L24 6z"/>
    </svg>
  );
};

School.defaultProps = {
  style: {},
  className: '',
};

School.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default School;
