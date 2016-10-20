
import React, { PropTypes } from 'react';

const BorderAll = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 6v36h36V6H6zm16 32H10V26h12v12zm0-16H10V10h12v12zm16 16H26V26h12v12zm0-16H26V10h12v12z"/>
    </svg>
  );
};

BorderAll.defaultProps = {
  style: {},
  className: '',
};

BorderAll.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BorderAll;
