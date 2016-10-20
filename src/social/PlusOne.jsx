
import React, { PropTypes } from 'react';

const PlusOne = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 16h-4v8H8v4h8v8h4v-8h8v-4h-8zm9-3.84v3.64l5-1V36h4V10z"/>
    </svg>
  );
};

PlusOne.defaultProps = {
  style: {},
  className: '',
};

PlusOne.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PlusOne;
