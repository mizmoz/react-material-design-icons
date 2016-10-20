
import React, { PropTypes } from 'react';

const FolderOpen = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 24H8V16h32v20z"/>
    </svg>
  );
};

FolderOpen.defaultProps = {
  style: {},
  className: '',
};

FolderOpen.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FolderOpen;
