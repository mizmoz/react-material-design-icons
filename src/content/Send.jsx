
import React, { PropTypes } from 'react';

const Send = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z"/>
    </svg>
  );
};

Send.defaultProps = {
  style: {},
  className: '',
};

Send.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Send;
