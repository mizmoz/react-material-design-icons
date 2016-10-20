
import React, { PropTypes } from 'react';

const RoundedCorner = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 38h4v4h-4v-4zm0-4h4v-4h-4v4zM6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm0-8h4V6H6v4zm8 0h4V6h-4v4zm16 32h4v-4h-4v4zm-8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm-16 0h4v-4h-4v4zm-8 0h4v-4H6v4zm36-26c0-5.51-4.49-10-10-10H22v4h10c3.31 0 6 2.69 6 6v10h4V16z"/>
    </svg>
  );
};

RoundedCorner.defaultProps = {
  style: {},
  className: '',
};

RoundedCorner.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RoundedCorner;
