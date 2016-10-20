
import React, { PropTypes } from 'react';

const UnfoldMore = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 11.66L30.34 18l2.83-2.83L24 6l-9.17 9.17L17.66 18 24 11.66zm0 24.68L17.66 30l-2.83 2.83L24 42l9.17-9.17L30.34 30 24 36.34z"/>
    </svg>
  );
};

UnfoldMore.defaultProps = {
  style: {},
  className: '',
};

UnfoldMore.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default UnfoldMore;
