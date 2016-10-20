
import React, { PropTypes } from 'react';

const LocalConvenienceStore = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 14V8H10v6H4v26h16v-8h8v8h16V14h-6zm-16 6h-4v2h4v2h-6v-6h4v-2h-4v-2h6v6zm10 4h-2v-4h-4v-6h2v4h2v-4h2v10z"/>
    </svg>
  );
};

LocalConvenienceStore.defaultProps = {
  style: {},
  className: '',
};

LocalConvenienceStore.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalConvenienceStore;
