
import React, { PropTypes } from 'react';

const Error = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z"/>
    </svg>
  );
};

Error.defaultProps = {
  style: {},
  className: '',
};

Error.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Error;
