
import React, { PropTypes } from 'react';

const ViewColumn = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 36h10V10H20v26zM8 36h10V10H8v26zm24-26v26h10V10H32z"/>
    </svg>
  );
};

ViewColumn.defaultProps = {
  style: {},
  className: '',
};

ViewColumn.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewColumn;
