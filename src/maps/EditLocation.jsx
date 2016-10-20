
import React, { PropTypes } from 'react';

const EditLocation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4c-7.72 0-14 6.28-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.72-6.28-14-14-14zm-3.12 20H18v-2.88l6.7-6.68 2.86 2.86-6.68 6.7zm8.9-8.9l-1.4 1.4-2.88-2.88 1.4-1.4c.3-.3.78-.3 1.08 0l1.8 1.8c.3.3.3.78 0 1.08z"/>
    </svg>
  );
};

EditLocation.defaultProps = {
  style: {},
  className: '',
};

EditLocation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default EditLocation;
