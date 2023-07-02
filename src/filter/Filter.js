import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ ...filters, [name]: parseFloat(value) });
  };

  return (
    <div>
      <label htmlFor="minPrice">Minimum Price:</label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        value={filters.minPrice || ''}
        onChange={handlePriceChange}
      />
      <label htmlFor="maxPrice">Maximum Price:</label>
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        value={filters.maxPrice || ''}
        onChange={handlePriceChange}
      />
      {/* Add more filter options */}
    </div>
  );
};

export default Filter;
