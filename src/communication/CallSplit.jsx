
import React, { PropTypes } from 'react';

const CallSplit = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 8l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L40 20V8zm-8 0H8v12l4.59-4.59L22 24.83V40h4V23.17L15.41 12.59z"/>
    </svg>
  );
};

CallSplit.defaultProps = {
  style: {},
  className: '',
};

CallSplit.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CallSplit;
