
import React, { PropTypes } from 'react';

const VpnKey = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M25.3 20c-1.65-4.66-6.08-8-11.3-8-6.63 0-12 5.37-12 12s5.37 12 12 12c5.22 0 9.65-3.34 11.3-8H34v8h8v-8h4v-8H25.3zM14 28c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  );
};

VpnKey.defaultProps = {
  style: {},
  className: '',
};

VpnKey.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VpnKey;
