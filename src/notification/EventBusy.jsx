
import React, { PropTypes } from 'react';

const EventBusy = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18.62 34l4.88-4.88L28.38 34l2.12-2.12L25.62 27l4.88-4.88L28.38 20l-4.88 4.88L18.62 20l-2.12 2.12L21.38 27l-4.88 4.88L18.62 34zM38 6h-2V2h-4v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V16h28v22z"/>
    </svg>
  );
};

EventBusy.defaultProps = {
  style: {},
  className: '',
};

EventBusy.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default EventBusy;