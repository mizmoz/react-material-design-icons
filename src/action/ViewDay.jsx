
import React, { PropTypes } from 'react';

const ViewDay = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M4 42h38v-6H4v6zm36-26H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zM4 6v6h38V6H4z"/>
    </svg>
  );
};

ViewDay.defaultProps = {
  style: {},
  className: '',
};

ViewDay.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewDay;
