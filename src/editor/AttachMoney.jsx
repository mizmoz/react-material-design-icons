
import React, { PropTypes } from 'react';

const AttachMoney = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M23.6 21.8c-4.54-1.18-6-2.39-6-4.29 0-2.18 2.01-3.71 5.4-3.71 3.56 0 4.88 1.7 5 4.2h4.42c-.13-3.45-2.24-6.59-6.42-7.62V6h-6v4.32c-3.88.85-7 3.35-7 7.22 0 4.62 3.83 6.92 9.4 8.26 5.01 1.2 6 2.95 6 4.83 0 1.37-.97 3.57-5.4 3.57-4.12 0-5.75-1.85-5.96-4.2h-4.41c.25 4.38 3.52 6.83 7.37 7.66V42h6v-4.3c3.89-.75 7-3 7-7.11 0-5.66-4.86-7.6-9.4-8.79z"/>
    </svg>
  );
};

AttachMoney.defaultProps = {
  style: {},
  className: '',
};

AttachMoney.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AttachMoney;
