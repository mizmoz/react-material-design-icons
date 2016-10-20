
import React, { PropTypes } from 'react';

const Done = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z"/>
    </svg>
  );
};

Done.defaultProps = {
  style: {},
  className: '',
};

Done.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Done;
