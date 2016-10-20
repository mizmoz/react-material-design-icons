
import React, { PropTypes } from 'react';

const InsertComment = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z"/>
    </svg>
  );
};

InsertComment.defaultProps = {
  style: {},
  className: '',
};

InsertComment.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default InsertComment;
