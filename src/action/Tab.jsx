
import React, { PropTypes } from 'react';

const Tab = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H6V10h20v8h16v20z"/>
    </svg>
  );
};

Tab.defaultProps = {
  style: {},
  className: '',
};

Tab.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Tab;
