
import React, { PropTypes } from 'react';

const InfoOutline = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/>
    </svg>
  );
};

InfoOutline.defaultProps = {
  style: {},
  className: '',
};

InfoOutline.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default InfoOutline;
