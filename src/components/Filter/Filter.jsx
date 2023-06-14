import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterStyled>
    <label>
      Filter by name:
      <input className="filter-input" type="text" value={value} onChange={onChange} />
    </label>
    </FilterStyled>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
