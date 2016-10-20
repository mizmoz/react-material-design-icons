
import React, { PropTypes } from 'react';

const ImportExport = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 6l-8 7.98h6V28h4V13.98h6L18 6zm14 28.02V20h-4v14.02h-6L30 42l8-7.98h-6z"/>
    </svg>
  );
};

ImportExport.defaultProps = {
  style: {},
  className: '',
};

ImportExport.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ImportExport;
