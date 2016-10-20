
import React, { PropTypes } from 'react';

const SkipNext = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"/>
    </svg>
  );
};

SkipNext.defaultProps = {
  style: {},
  className: '',
};

SkipNext.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SkipNext;
