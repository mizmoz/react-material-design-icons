
import React, { PropTypes } from 'react';

const Stop = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 12h24v24H12z"/>
    </svg>
  );
};

Stop.defaultProps = {
  style: {},
  className: '',
};

Stop.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Stop;
