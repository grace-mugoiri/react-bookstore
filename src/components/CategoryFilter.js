import React from 'react';
import PropTypes from 'prop-types';
import '../styleAssets/CategoryFilter.css';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const filterCategories = ['All', ...bookCategories];


const CategoryFilter = props => {
  const { handleFilterChange } = props;
  const filterOptions = filterCategories
    .map(category => <option key={category} value={category}>{category}</option>);
  return (
    <div className="filter-class">
      <b>Filter by:</b>
      <select onChange={handleFilterChange}>
        {filterOptions}
      </select>
    </div>
  );
};


CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
