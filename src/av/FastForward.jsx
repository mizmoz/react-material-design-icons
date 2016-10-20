
import React, { PropTypes } from 'react';

const FastForward = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 36l17-12L8 12v24zm18-24v24l17-12-17-12z"/>
    </svg>
  );
};

FastForward.defaultProps = {
  style: {},
  className: '',
};

FastForward.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FastForward;
