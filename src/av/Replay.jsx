
import React, { PropTypes } from 'react';

const Replay = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"/>
    </svg>
  );
};

Replay.defaultProps = {
  style: {},
  className: '',
};

Replay.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Replay;
