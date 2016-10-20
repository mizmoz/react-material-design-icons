
import React, { PropTypes } from 'react';

const MarkunreadMailbox = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 12H20v12h-4V8h12V0H12v12H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4z"/>
    </svg>
  );
};

MarkunreadMailbox.defaultProps = {
  style: {},
  className: '',
};

MarkunreadMailbox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default MarkunreadMailbox;
