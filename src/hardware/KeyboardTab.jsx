
import React, { PropTypes } from 'react';

const KeyboardTab = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M23.17 14.83L30.34 22H2v4h28.34l-7.17 7.17L26 36l12-12-12-12-2.83 2.83zM40 12v24h4V12h-4z"/>
    </svg>
  );
};

KeyboardTab.defaultProps = {
  style: {},
  className: '',
};

KeyboardTab.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardTab;
