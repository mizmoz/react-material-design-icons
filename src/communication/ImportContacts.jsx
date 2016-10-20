
import React, { PropTypes } from 'react';

const ImportContacts = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 10c-2.21-.7-4.66-1-7-1-3.9 0-8.1.8-11 3-2.9-2.2-7.1-3-11-3s-8.1.8-11 3v29.3c0 .5.5 1 1 1 .2 0 .3-.1.5-.1C6.2 40.9 10.1 40 13 40c3.9 0 8.1.8 11 3 2.7-1.7 7.6-3 11-3 3.3 0 6.7.6 9.5 2.1.2.1.3.1.5.1.5 0 1-.5 1-1V12c-1.2-.9-2.5-1.5-4-2zm0 27c-2.2-.7-4.6-1-7-1-3.4 0-8.3 1.3-11 3V16c2.7-1.7 7.6-3 11-3 2.4 0 4.8.3 7 1v23z"/>
    </svg>
  );
};

ImportContacts.defaultProps = {
  style: {},
  className: '',
};

ImportContacts.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ImportContacts;
