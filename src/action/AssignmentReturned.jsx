
import React, { PropTypes } from 'react';

const AssignmentReturned = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM24 6c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 30L14 26h6v-8h8v8h6L24 36z"/>
    </svg>
  );
};

AssignmentReturned.defaultProps = {
  style: {},
  className: '',
};

AssignmentReturned.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AssignmentReturned;
