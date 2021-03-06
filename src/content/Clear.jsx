
import React, { PropTypes } from 'react';

const Clear = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
    </svg>
  );
};

Clear.defaultProps = {
  style: {},
  className: '',
};

Clear.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Clear;
