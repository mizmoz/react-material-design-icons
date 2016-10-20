
import React, { PropTypes } from 'react';

const UnfoldLess = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14.83 37.17L17.66 40 24 33.66 30.34 40l2.83-2.83L24 28l-9.17 9.17zm18.34-26.34L30.34 8 24 14.34 17.66 8l-2.83 2.83L24 20l9.17-9.17z"/>
    </svg>
  );
};

UnfoldLess.defaultProps = {
  style: {},
  className: '',
};

UnfoldLess.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default UnfoldLess;
