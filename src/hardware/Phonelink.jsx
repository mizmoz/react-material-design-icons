
import React, { PropTypes } from 'react';

const Phonelink = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 12h36V8H8c-2.21 0-4 1.79-4 4v22H0v6h28v-6H8V12zm38 4H34c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm-2 18h-8V20h8v14z"/>
    </svg>
  );
};

Phonelink.defaultProps = {
  style: {},
  className: '',
};

Phonelink.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Phonelink;
