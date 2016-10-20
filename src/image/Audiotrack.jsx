
import React, { PropTypes } from 'react';

const Audiotrack = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 6v18.55c-.94-.33-1.94-.55-3-.55-4.97 0-9 4.03-9 9s4.03 9 9 9c4.63 0 8.4-3.51 8.9-8h.1V12h8V6H24z"/>
    </svg>
  );
};

Audiotrack.defaultProps = {
  style: {},
  className: '',
};

Audiotrack.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Audiotrack;
