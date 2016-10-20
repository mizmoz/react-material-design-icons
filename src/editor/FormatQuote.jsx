
import React, { PropTypes } from 'react';

const FormatQuote = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 34h6l4-8V14H10v12h6zm16 0h6l4-8V14H26v12h6z"/>
    </svg>
  );
};

FormatQuote.defaultProps = {
  style: {},
  className: '',
};

FormatQuote.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatQuote;
