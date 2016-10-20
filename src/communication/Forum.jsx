
import React, { PropTypes } from 'react';

const Forum = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 12h-4v18H12v4c0 1.1.9 2 2 2h22l8 8V14c0-1.1-.9-2-2-2zm-8 12V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v28l8-8h20c1.1 0 2-.9 2-2z"/>
    </svg>
  );
};

Forum.defaultProps = {
  style: {},
  className: '',
};

Forum.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Forum;
