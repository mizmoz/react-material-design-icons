
import React, { PropTypes } from 'react';

const PlayForWork = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 10v11.17h-7l9 9 9-9h-7V10h-4zM12 28c0 6.62 5.38 12 12 12s12-5.38 12-12h-4c0 4.42-3.58 8-8 8s-8-3.58-8-8h-4z"/>
    </svg>
  );
};

PlayForWork.defaultProps = {
  style: {},
  className: '',
};

PlayForWork.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PlayForWork;
