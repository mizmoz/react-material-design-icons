
import React, { PropTypes } from 'react';

const FilterList = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 36h8v-4h-8v4zM6 12v4h36v-4H6zm6 14h24v-4H12v4z"/>
    </svg>
  );
};

FilterList.defaultProps = {
  style: {},
  className: '',
};

FilterList.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FilterList;
