
import React, { PropTypes } from 'react';

const RoomService = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M4 34h40v4H4zm23.67-18.42c.21-.48.33-1.02.33-1.58 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .56.12 1.1.33 1.58C12.5 17.2 6.54 23.86 6 32h36c-.54-8.14-6.5-14.8-14.33-16.42z"/>
    </svg>
  );
};

RoomService.defaultProps = {
  style: {},
  className: '',
};

RoomService.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RoomService;
