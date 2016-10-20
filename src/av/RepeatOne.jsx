
import React, { PropTypes } from 'react';

const RepeatOne = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8zm-8-4V18h-2l-4 2v2h3v8h3z"/>
    </svg>
  );
};

RepeatOne.defaultProps = {
  style: {},
  className: '',
};

RepeatOne.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RepeatOne;
