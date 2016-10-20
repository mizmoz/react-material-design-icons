
import React, { PropTypes } from 'react';

const Pause = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"/>
    </svg>
  );
};

Pause.defaultProps = {
  style: {},
  className: '',
};

Pause.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Pause;
