
import React, { PropTypes } from 'react';

const ArrowDropUp = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 28l10-10 10 10z"/>
    </svg>
  );
};

ArrowDropUp.defaultProps = {
  style: {},
  className: '',
};

ArrowDropUp.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArrowDropUp;
