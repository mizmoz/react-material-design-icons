
import React, { PropTypes } from 'react';

const Drafts = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M43.98 16c0-1.44-.75-2.69-1.88-3.4L24 2 5.9 12.6C4.77 13.31 4 14.56 4 16v20c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4l-.02-20zM24 26L7.48 15.67 24 6l16.52 9.67L24 26z"/>
    </svg>
  );
};

Drafts.defaultProps = {
  style: {},
  className: '',
};

Drafts.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Drafts;
