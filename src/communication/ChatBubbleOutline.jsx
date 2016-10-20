
import React, { PropTypes } from 'react';

const ChatBubbleOutline = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4H8C5.79 4 4 5.79 4 8v36l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H12l-4 4V8h32v24z"/>
    </svg>
  );
};

ChatBubbleOutline.defaultProps = {
  style: {},
  className: '',
};

ChatBubbleOutline.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ChatBubbleOutline;
