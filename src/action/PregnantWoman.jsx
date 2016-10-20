
import React, { PropTypes } from 'react';

const PregnantWoman = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 8c0-2.22 1.78-4 4-4s4 1.78 4 4-1.78 4-4 4-4-1.78-4-4zm14 18c-.02-2.69-1.66-5.02-4-6 0-3.31-2.69-6-6-6s-6 2.69-6 6v14h4v10h6V34h6v-8z"/>
    </svg>
  );
};

PregnantWoman.defaultProps = {
  style: {},
  className: '',
};

PregnantWoman.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PregnantWoman;
