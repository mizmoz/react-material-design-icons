
import React, { PropTypes } from 'react';

const FolderSpecial = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 12H24l-4-4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4zm-4.13 22L30 30.56 24.13 34l1.56-6.66-5.18-4.48 6.83-.59L30 16l2.67 6.28 6.83.59-5.18 4.48L35.87 34z"/>
    </svg>
  );
};

FolderSpecial.defaultProps = {
  style: {},
  className: '',
};

FolderSpecial.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FolderSpecial;
