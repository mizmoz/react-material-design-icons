
import React, { PropTypes } from 'react';

const CheckBox = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/>
    </svg>
  );
};

CheckBox.defaultProps = {
  style: {},
  className: '',
};

CheckBox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CheckBox;