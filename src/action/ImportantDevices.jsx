
import React, { PropTypes } from 'react';

const ImportantDevices = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 18h-6.06L22 12l-1.94 6H14l4.94 3.52-1.88 5.82 4.94-3.6 4.94 3.6-1.88-5.82zm0 0h-6.06L22 12l-1.94 6H14l4.94 3.52-1.88 5.82 4.94-3.6 4.94 3.6-1.88-5.82zm16 4.01L36 22c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V24c0-1.1-.9-1.99-2-1.99zM46 40H36V26h10v14zM40 4H4C1.78 4 0 5.78 0 8v24c0 2.2 1.78 4 4 4h14v4h-4v4h16v-4h-4v-4h4v-4H4V8h36v10h4V8c0-2.22-1.8-4-4-4zM23.94 18L22 12l-1.94 6H14l4.94 3.52-1.88 5.82 4.94-3.6 4.94 3.6-1.88-5.82L30 18h-6.06z"/>
    </svg>
  );
};

ImportantDevices.defaultProps = {
  style: {},
  className: '',
};

ImportantDevices.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ImportantDevices;
