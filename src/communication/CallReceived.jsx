
import React, { PropTypes } from 'react';

const CallReceived = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 10.83L37.17 8 14 31.17V18h-4v20h20v-4H16.83z"/>
    </svg>
  );
};

CallReceived.defaultProps = {
  style: {},
  className: '',
};

CallReceived.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CallReceived;
