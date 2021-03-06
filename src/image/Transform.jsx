
import React, { PropTypes } from 'react';

const Transform = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 36v-4H16V8h4l-6-6-6 6h4v4H4v4h8v16c0 2.21 1.79 4 4 4h16v4h-4l6 6 6-6h-4v-4h8zM20 16h12v12h4V16c0-2.21-1.79-4-4-4H20v4z"/>
    </svg>
  );
};

Transform.defaultProps = {
  style: {},
  className: '',
};

Transform.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Transform;
