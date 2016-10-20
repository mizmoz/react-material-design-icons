
import React, { PropTypes } from 'react';

const Brightness1 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20"/></svg>
    </svg>
  );
};

Brightness1.defaultProps = {
  style: {},
  className: '',
};

Brightness1.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Brightness1;
