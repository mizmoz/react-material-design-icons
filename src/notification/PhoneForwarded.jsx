
import React, { PropTypes } from 'react';

const PhoneForwarded = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 22l10-10L36 2v6h-8v8h8v6zm4 9c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.89 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2z"/>
    </svg>
  );
};

PhoneForwarded.defaultProps = {
  style: {},
  className: '',
};

PhoneForwarded.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PhoneForwarded;
