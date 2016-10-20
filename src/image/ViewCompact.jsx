
import React, { PropTypes } from 'react';

const ViewCompact = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 38h12V24H6v14zm14 0h24V24H20v14zM6 10v12h38V10H6z"/>
    </svg>
  );
};

ViewCompact.defaultProps = {
  style: {},
  className: '',
};

ViewCompact.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewCompact;
