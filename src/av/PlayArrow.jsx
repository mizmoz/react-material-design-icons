
import React, { PropTypes } from 'react';

const PlayArrow = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M16 10v28l22-14z"/>
    </svg>
  );
};

PlayArrow.defaultProps = {
  style: {},
  className: '',
};

PlayArrow.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PlayArrow;
