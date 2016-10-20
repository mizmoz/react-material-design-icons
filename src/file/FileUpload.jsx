
import React, { PropTypes } from 'react';

const FileUpload = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 32h12V20h8L24 6 10 20h8zm-8 4h28v4H10z"/>
    </svg>
  );
};

FileUpload.defaultProps = {
  style: {},
  className: '',
};

FileUpload.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FileUpload;
