
import React, { PropTypes } from 'react';

const InsertInvitation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M34 24H24v10h10V24zM32 2v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4h-2V2h-4zm6 36H10V16h28v22z"/>
    </svg>
  );
};

InsertInvitation.defaultProps = {
  style: {},
  className: '',
};

InsertInvitation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default InsertInvitation;
