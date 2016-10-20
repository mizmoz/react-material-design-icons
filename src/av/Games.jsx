
import React, { PropTypes } from 'react';

const Games = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z"/>
    </svg>
  );
};

Games.defaultProps = {
  style: {},
  className: '',
};

Games.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Games;
