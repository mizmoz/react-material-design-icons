
import React, { PropTypes } from 'react';

const Replay10 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 10V2L14 12l10 10v-8c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12H8c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16zm-2.2 22h-1.7v-6.5l-2 .6v-1.4l3.5-1.3h.2V32zm8.5-3.5c0 .6-.1 1.2-.2 1.6s-.3.8-.6 1.1-.6.5-.9.7-.7.2-1.2.2-.8-.1-1.2-.2-.7-.4-.9-.7-.5-.7-.6-1.1-.2-1-.2-1.6V27c0-.6.1-1.2.2-1.6s.3-.8.6-1.1.6-.5.9-.7.7-.2 1.2-.2.8.1 1.2.2.7.4.9.7.5.7.6 1.1.2 1 .2 1.6v1.5zm-1.6-1.7c0-.4 0-.7-.1-1s-.1-.5-.2-.6-.2-.3-.4-.3-.3-.1-.5-.1-.4 0-.5.1-.3.2-.4.3-.2.4-.2.6-.1.6-.1 1v1.9c0 .4 0 .7.1 1s.1.5.2.6.2.3.4.3.3.1.5.1.4 0 .5-.1.3-.2.4-.3.2-.4.2-.6.1-.6.1-1v-1.9z"/>
    </svg>
  );
};

Replay10.defaultProps = {
  style: {},
  className: '',
};

Replay10.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Replay10;
