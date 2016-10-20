
import React, { PropTypes } from 'react';

const CallMade = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 10v4h13.17L8 37.17 10.83 40 34 16.83V30h4V10z"/>
    </svg>
  );
};

CallMade.defaultProps = {
  style: {},
  className: '',
};

CallMade.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CallMade;