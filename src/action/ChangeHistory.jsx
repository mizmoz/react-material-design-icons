
import React, { PropTypes } from 'react';

const ChangeHistory = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 15.55L36.78 36H11.22L24 15.55M24 8L4 40h40L24 8z"/>
    </svg>
  );
};

ChangeHistory.defaultProps = {
  style: {},
  className: '',
};

ChangeHistory.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ChangeHistory;
