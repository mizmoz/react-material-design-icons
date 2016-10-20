
import React, { PropTypes } from 'react';

const Add = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/>
    </svg>
  );
};

Add.defaultProps = {
  style: {},
  className: '',
};

Add.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Add;
