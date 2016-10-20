
import React, { PropTypes } from 'react';

const ModeComment = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M43.98 8c0-2.21-1.77-4-3.98-4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8-.02-36z"/>
    </svg>
  );
};

ModeComment.defaultProps = {
  style: {},
  className: '',
};

ModeComment.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ModeComment;
