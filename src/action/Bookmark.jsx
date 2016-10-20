
import React, { PropTypes } from 'react';

const Bookmark = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4z"/>
    </svg>
  );
};

Bookmark.defaultProps = {
  style: {},
  className: '',
};

Bookmark.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Bookmark;
