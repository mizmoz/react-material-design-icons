
import React, { PropTypes } from 'react';

const PriorityHigh = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 6h8v24h-8z"/>
    </svg>
  );
};

PriorityHigh.defaultProps = {
  style: {},
  className: '',
};

PriorityHigh.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PriorityHigh;
