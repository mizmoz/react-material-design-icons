
import React, { PropTypes } from 'react';

const AccountBalance = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 20v14h6V20H8zm12 0v14h6V20h-6zM4 44h38v-6H4v6zm28-24v14h6V20h-6zM23 2L4 12v4h38v-4L23 2z"/>
    </svg>
  );
};

AccountBalance.defaultProps = {
  style: {},
  className: '',
};

AccountBalance.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AccountBalance;
