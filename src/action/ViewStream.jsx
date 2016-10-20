
import React, { PropTypes } from 'react';

const ViewStream = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 36h34V24H8v12zm0-26v12h34V10H8z"/>
    </svg>
  );
};

ViewStream.defaultProps = {
  style: {},
  className: '',
};

ViewStream.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewStream;
