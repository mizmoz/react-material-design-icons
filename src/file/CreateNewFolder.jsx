
import React, { PropTypes } from 'react';

const CreateNewFolder = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-2 16h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"/>
    </svg>
  );
};

CreateNewFolder.defaultProps = {
  style: {},
  className: '',
};

CreateNewFolder.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CreateNewFolder;