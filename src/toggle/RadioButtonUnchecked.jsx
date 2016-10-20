
import React, { PropTypes } from 'react';

const RadioButtonUnchecked = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
    </svg>
  );
};

RadioButtonUnchecked.defaultProps = {
  style: {},
  className: '',
};

RadioButtonUnchecked.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RadioButtonUnchecked;
