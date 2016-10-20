
import React, { PropTypes } from 'react';

const DoNotDisturbOn = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm10 22H14v-4h20v4z"/>
    </svg>
  );
};

DoNotDisturbOn.defaultProps = {
  style: {},
  className: '',
};

DoNotDisturbOn.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DoNotDisturbOn;
