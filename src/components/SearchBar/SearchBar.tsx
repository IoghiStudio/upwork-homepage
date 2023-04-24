import React from 'react';
import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className="searchbar">
      <input
        className='searchbar__input'
        type="text"
      />
    </div>
  );
}