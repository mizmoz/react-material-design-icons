
import React, { PropTypes } from 'react';

const DragHandle = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 18H8v4h32v-4zM8 30h32v-4H8v4z"/>
    </svg>
  );
};

DragHandle.defaultProps = {
  style: {},
  className: '',
};

DragHandle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DragHandle;
