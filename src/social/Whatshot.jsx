
import React, { PropTypes } from 'react';

const Whatshot = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M27 1.34s1.48 5.3 1.48 9.6c0 4.12-2.7 7.47-6.83 7.47s-7.25-3.34-7.25-7.47l.05-.72C10.43 15.03 8 21.23 8 28c0 8.84 7.16 16 16 16s16-7.16 16-16c0-10.79-5.19-20.41-13-26.66zM23.42 38c-3.56 0-6.45-2.81-6.45-6.28 0-3.25 2.09-5.53 5.63-6.24s7.2-2.41 9.23-5.15c.78 2.58 1.19 5.3 1.19 8.07 0 5.29-4.3 9.6-9.6 9.6z"/>
    </svg>
  );
};

Whatshot.defaultProps = {
  style: {},
  className: '',
};

Whatshot.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Whatshot;
