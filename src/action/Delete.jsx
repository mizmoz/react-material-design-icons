
import React, { PropTypes } from 'react';

const Delete = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"/>
    </svg>
  );
};

Delete.defaultProps = {
  style: {},
  className: '',
};

Delete.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Delete;
