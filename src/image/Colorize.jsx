
import React, { PropTypes } from 'react';

const Colorize = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M41.41 11.26l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-6.25 6.25L23.83 9 21 11.83l2.84 2.84L6 32.5V42h9.5l17.84-17.84L36.17 27 39 24.17l-3.84-3.84 6.25-6.25c.79-.78.79-2.04 0-2.82zM13.84 38L10 34.16l16.13-16.13 3.84 3.84L13.84 38z"/>
    </svg>
  );
};

Colorize.defaultProps = {
  style: {},
  className: '',
};

Colorize.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Colorize;
