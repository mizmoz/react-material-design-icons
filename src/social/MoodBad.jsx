
import React, { PropTypes } from 'react';

const MoodBad = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm17.21 13c-1.6-4.09-5.55-7-10.21-7s-8.61 2.91-10.21 7"/>
    </svg>
  );
};

MoodBad.defaultProps = {
  style: {},
  className: '',
};

MoodBad.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default MoodBad;