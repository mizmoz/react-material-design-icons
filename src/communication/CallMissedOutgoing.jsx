
import React, { PropTypes } from 'react';

const CallMissedOutgoing = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 16.82l18 18 14-14V30h4V14H26v4h9.18L24 29.18 8.82 14 6 16.82z"/>
    </svg>
  );
};

CallMissedOutgoing.defaultProps = {
  style: {},
  className: '',
};

CallMissedOutgoing.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CallMissedOutgoing;
