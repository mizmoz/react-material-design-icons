
import React, { PropTypes } from 'react';

const Subject = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 34H8v4h20v-4zm12-16H8v4h32v-4zM8 30h32v-4H8v4zm0-20v4h32v-4H8z"/>
    </svg>
  );
};

Subject.defaultProps = {
  style: {},
  className: '',
};

Subject.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Subject;
