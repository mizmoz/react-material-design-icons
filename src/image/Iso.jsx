
import React, { PropTypes } from 'react';

const Iso = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-27 9h4v-4h3v4h4v3h-4v4h-3v-4h-4v-3zm27 23H10l28-28v28zm-4-4v-3H24v3h10z"/>
    </svg>
  );
};

Iso.defaultProps = {
  style: {},
  className: '',
};

Iso.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Iso;
