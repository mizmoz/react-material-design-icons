
import React, { PropTypes } from 'react';

const Cake = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 12c2.21 0 4-1.79 4-4 0-.75-.21-1.46-.57-2.06L24 0l-3.43 5.94C20.21 6.54 20 7.25 20 8c0 2.21 1.79 4 4 4zm9.19 19.97l-2.15-2.15-2.16 2.15c-2.61 2.61-7.17 2.61-9.78 0l-2.15-2.15-2.16 2.15C13.5 33.28 11.77 34 9.92 34c-1.45 0-2.8-.46-3.92-1.23V42c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2v-9.23c-1.12.77-2.46 1.23-3.92 1.23-1.85 0-3.58-.72-4.89-2.03zM36 18H26v-4h-4v4H12c-3.31 0-6 2.69-6 6v3.08C6 29.24 7.76 31 9.92 31c1.05 0 2.03-.41 2.77-1.15l4.28-4.27 4.27 4.26c1.48 1.48 4.06 1.48 5.54 0l4.28-4.26 4.27 4.26c.74.74 1.72 1.15 2.77 1.15 2.16 0 3.92-1.76 3.92-3.92V24c-.02-3.31-2.71-6-6.02-6z"/>
    </svg>
  );
};

Cake.defaultProps = {
  style: {},
  className: '',
};

Cake.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Cake;
