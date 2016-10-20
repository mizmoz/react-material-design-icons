
import React, { PropTypes } from 'react';

const DeleteSweep = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 32h8v4h-8zm0-16h14v4H30zm0 8h12v4H30zM6 36c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V16H6v20zm22-26h-6l-2-2h-8l-2 2H4v4h24z"/>
    </svg>
  );
};

DeleteSweep.defaultProps = {
  style: {},
  className: '',
};

DeleteSweep.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DeleteSweep;
