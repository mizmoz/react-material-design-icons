
import React, { PropTypes } from 'react';

const NetworkCell = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill-opacity=".3" d="M4 44h40V4z"/>
    </svg>
  );
};

NetworkCell.defaultProps = {
  style: {},
  className: '',
};

NetworkCell.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NetworkCell;
