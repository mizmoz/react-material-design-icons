
import React, { PropTypes } from 'react';

const EuroSymbol = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 37c-5.01 0-9.36-2.84-11.53-7H30v-4H17.17c-.1-.65-.17-1.32-.17-2s.07-1.35.17-2H30v-4H18.47c2.17-4.16 6.51-7 11.53-7 3.23 0 6.18 1.18 8.45 3.13L42 10.6C38.82 7.75 34.61 6 30 6c-7.83 0-14.48 5.01-16.95 12H6v4h6.12c-.08.66-.12 1.32-.12 2 0 .68.04 1.34.12 2H6v4h7.05c2.47 6.99 9.12 12 16.95 12 4.61 0 8.82-1.75 12-4.6l-3.55-3.54C36.18 35.81 33.23 37 30 37z"/>
    </svg>
  );
};

EuroSymbol.defaultProps = {
  style: {},
  className: '',
};

EuroSymbol.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default EuroSymbol;
