
import React, { PropTypes } from 'react';

const AddAPhoto = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 8V2h4v6h6v4h-6v6H6v-6H0V8h6zm6 12v-6h6V8h14l3.66 4H42c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V20h6zm14 18c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10zm-6.4-10c0 3.54 2.86 6.4 6.4 6.4s6.4-2.86 6.4-6.4-2.86-6.4-6.4-6.4-6.4 2.86-6.4 6.4z"/>
    </svg>
  );
};

AddAPhoto.defaultProps = {
  style: {},
  className: '',
};

AddAPhoto.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AddAPhoto;
