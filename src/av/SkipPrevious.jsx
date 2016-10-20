
import React, { PropTypes } from 'react';

const SkipPrevious = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 12h4v24h-4zm7 12l17 12V12z"/>
    </svg>
  );
};

SkipPrevious.defaultProps = {
  style: {},
  className: '',
};

SkipPrevious.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SkipPrevious;
