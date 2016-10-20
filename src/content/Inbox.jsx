
import React, { PropTypes } from 'react';

const Inbox = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H9.98c-2.21 0-3.96 1.79-3.96 4L6 38c0 2.21 1.77 4 3.98 4H38c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 24h-8c0 3.31-2.69 6-6 6s-6-2.69-6-6H9.98V10H38v20z"/>
    </svg>
  );
};

Inbox.defaultProps = {
  style: {},
  className: '',
};

Inbox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Inbox;