
import React, { PropTypes } from 'react';

const Remove = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 26H10v-4h28v4z"/>
    </svg>
  );
};

Remove.defaultProps = {
  style: {},
  className: '',
};

Remove.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Remove;
