
import React, { PropTypes } from 'react';

const Toc = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 18h28v-4H6v4zm0 8h28v-4H6v4zm0 8h28v-4H6v4zm32 0h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4z"/>
    </svg>
  );
};

Toc.defaultProps = {
  style: {},
  className: '',
};

Toc.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Toc;
