
import React, { PropTypes } from 'react';

const ViewModule = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 22h10V10H8v12zm0 14h10V24H8v12zm12 0h10V24H20v12zm12 0h10V24H32v12zM20 22h10V10H20v12zm12-12v12h10V10H32z"/>
    </svg>
  );
};

ViewModule.defaultProps = {
  style: {},
  className: '',
};

ViewModule.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewModule;
