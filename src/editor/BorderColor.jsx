
import React, { PropTypes } from 'react';

const BorderColor = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M35.5 14L28 6.5l-20 20V34h7.5l20-20zm5.91-5.91c.78-.78.78-2.05 0-2.83L36.74.59c-.78-.78-2.05-.78-2.83 0L30 4.5l7.5 7.5 3.91-3.91z"/>
    </svg>
  );
};

BorderColor.defaultProps = {
  style: {},
  className: '',
};

BorderColor.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BorderColor;
