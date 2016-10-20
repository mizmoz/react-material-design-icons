
import React, { PropTypes } from 'react';

const Satellite = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM10 9.98h6c0 3.31-2.69 6.02-6 6.02V9.98zM10 24v-4c5.52 0 10-4.5 10-10.02h4C24 17.71 17.73 24 10 24zm0 12l7-9 5 6.01L29 24l9 12H10z"/>
    </svg>
  );
};

Satellite.defaultProps = {
  style: {},
  className: '',
};

Satellite.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Satellite;