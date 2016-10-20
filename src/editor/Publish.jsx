
import React, { PropTypes } from 'react';

const Publish = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 8v4h28V8H10zm0 20h8v12h12V28h8L24 14 10 28z"/>
    </svg>
  );
};

Publish.defaultProps = {
  style: {},
  className: '',
};

Publish.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Publish;
