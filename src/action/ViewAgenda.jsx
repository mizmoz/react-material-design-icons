
import React, { PropTypes } from 'react';

const ViewAgenda = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 26H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zm0-20H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
    </svg>
  );
};

ViewAgenda.defaultProps = {
  style: {},
  className: '',
};

ViewAgenda.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewAgenda;
