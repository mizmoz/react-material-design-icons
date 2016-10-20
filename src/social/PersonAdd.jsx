
import React, { PropTypes } from 'react';

const PersonAdd = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm-18-4v-6H8v6H2v4h6v6h4v-6h6v-4h-6zm18 8c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"/>
    </svg>
  );
};

PersonAdd.defaultProps = {
  style: {},
  className: '',
};

PersonAdd.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PersonAdd;