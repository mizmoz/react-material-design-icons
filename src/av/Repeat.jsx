
import React, { PropTypes } from 'react';

const Repeat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"/>
    </svg>
  );
};

Repeat.defaultProps = {
  style: {},
  className: '',
};

Repeat.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Repeat;
