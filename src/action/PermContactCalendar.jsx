
import React, { PropTypes } from 'react';

const PermContactCalendar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6h-2V2h-4v4H16V2h-4v4h-2c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-14 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm12 24H12v-2c0-4 8-6.2 12-6.2S36 30 36 34v2z"/>
    </svg>
  );
};

PermContactCalendar.defaultProps = {
  style: {},
  className: '',
};

PermContactCalendar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PermContactCalendar;