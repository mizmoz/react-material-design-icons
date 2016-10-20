
import React, { PropTypes } from 'react';

const Undo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M25 16c-5.29 0-10.11 1.97-13.8 5.2L4 14v18h18l-7.23-7.23C17.54 22.44 21.09 21 25 21c7.09 0 13.09 4.61 15.19 11l4.73-1.56C42.17 22.06 34.3 16 25 16z"/>
    </svg>
  );
};

Undo.defaultProps = {
  style: {},
  className: '',
};

Undo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Undo;
