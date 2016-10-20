
import React, { PropTypes } from 'react';

const LocalHospital = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-2 22h-8v8h-8v-8h-8v-8h8v-8h8v8h8v8z"/>
    </svg>
  );
};

LocalHospital.defaultProps = {
  style: {},
  className: '',
};

LocalHospital.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalHospital;
