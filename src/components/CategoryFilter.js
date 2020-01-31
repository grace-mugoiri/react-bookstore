import React from 'react';
import PropTypes from 'prop-types';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const filterCategories = bookCategories.concat('All');

const CategoryFilter = ({ handleFilterChange }) => {
  const options = filterCategories.map((category) => (
    <option key={`filter-category-${category}`} value={category}>
      {category}
    </option>
  ));
  return (
    <div>
      <i>
        <b> Filter By:</b>
      </i>
      <select name="filter" id="filt" onChange={handleFilterChange}>
        {options}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;