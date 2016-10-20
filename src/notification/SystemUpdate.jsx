
import React, { PropTypes } from 'react';

const SystemUpdate = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M34 2.02L14 2c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28zm-2-12h-6V16h-4v10h-6l8 8 8-8z"/>
    </svg>
  );
};

SystemUpdate.defaultProps = {
  style: {},
  className: '',
};

SystemUpdate.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SystemUpdate;
