
import React, { PropTypes } from 'react';

const Train = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C16 4 8 5 8 12v19c0 3.86 3.14 7 7 7l-3 3v1h4.46l4-4H28l4 4h4v-1l-3-3c3.86 0 7-3.14 7-7V12c0-7-7.16-8-16-8zm-9 30c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm7-14H12v-8h10v8zm4 0v-8h10v8H26zm7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>
  );
};

Train.defaultProps = {
  style: {},
  className: '',
};

Train.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Train;
