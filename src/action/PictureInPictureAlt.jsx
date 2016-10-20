
import React, { PropTypes } from 'react';

const PictureInPictureAlt = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"/>
    </svg>
  );
};

PictureInPictureAlt.defaultProps = {
  style: {},
  className: '',
};

PictureInPictureAlt.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PictureInPictureAlt;
