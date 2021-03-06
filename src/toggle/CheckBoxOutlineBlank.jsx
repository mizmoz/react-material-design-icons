
import React, { PropTypes } from 'react';

const CheckBoxOutlineBlank = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z"/>
    </svg>
  );
};

CheckBoxOutlineBlank.defaultProps = {
  style: {},
  className: '',
};

CheckBoxOutlineBlank.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CheckBoxOutlineBlank;
