
import React, { PropTypes } from 'react';

const FindReplace = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 12c2.76 0 5.26 1.12 7.07 2.93L24 20h12V8l-4.1 4.1C29.37 9.57 25.87 8 22 8 14.95 8 9.13 13.22 8.16 20h4.04c.93-4.56 4.96-8 9.8-8zm11.28 18.27c1.33-1.81 2.23-3.95 2.56-6.27H31.8c-.93 4.56-4.96 8-9.8 8-2.76 0-5.26-1.12-7.07-2.93L20 24H8v12l4.1-4.1c2.53 2.53 6.03 4.1 9.9 4.1 3.1 0 5.96-1.02 8.28-2.73L40 42.98 42.98 40l-9.7-9.73z"/>
    </svg>
  );
};

FindReplace.defaultProps = {
  style: {},
  className: '',
};

FindReplace.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FindReplace;
