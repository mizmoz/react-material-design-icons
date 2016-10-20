
import React, { PropTypes } from 'react';

const Looks4 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 28h-4v-8h-8V14h4v8h4v-8h4v20z"/>
    </svg>
  );
};

Looks4.defaultProps = {
  style: {},
  className: '',
};

Looks4.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Looks4;
