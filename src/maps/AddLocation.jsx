
import React, { PropTypes } from 'react';

const AddLocation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4c-7.72 0-14 6.28-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.72-6.28-14-14-14zm8 16h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"/>
    </svg>
  );
};

AddLocation.defaultProps = {
  style: {},
  className: '',
};

AddLocation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AddLocation;
