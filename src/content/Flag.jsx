
import React, { PropTypes } from 'react';

const Flag = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28.8 12L28 8H10v34h4V28h11.2l.8 4h14V12z"/>
    </svg>
  );
};

Flag.defaultProps = {
  style: {},
  className: '',
};

Flag.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Flag;
