
import React, { PropTypes } from 'react';

const Nfc = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4.17H8c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm0 36H8v-32h32v32zm-4-28H26c-2.21 0-4 1.79-4 4v4.55c-1.19.69-2 1.97-2 3.45 0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.48-.81-2.75-2-3.45v-4.55h6v16H16v-16h4v-4h-8v24h24v-24z"/>
    </svg>
  );
};

Nfc.defaultProps = {
  style: {},
  className: '',
};

Nfc.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Nfc;