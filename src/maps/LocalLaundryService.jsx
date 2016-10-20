
import React, { PropTypes } from 'react';

const LocalLaundryService = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18.34 33.66c3.12 3.12 8.19 3.12 11.31 0 3.12-3.12 3.12-8.19 0-11.31L18.34 33.66zM36 4.02L12 4C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-3.98-4-3.98zM20 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 32c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z"/>
    </svg>
  );
};

LocalLaundryService.defaultProps = {
  style: {},
  className: '',
};

LocalLaundryService.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalLaundryService;
