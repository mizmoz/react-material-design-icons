
import React, { PropTypes } from 'react';

const KeyboardVoice = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 30c3.31 0 5.98-2.69 5.98-6L30 12c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V44h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z"/>
    </svg>
  );
};

KeyboardVoice.defaultProps = {
  style: {},
  className: '',
};

KeyboardVoice.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardVoice;