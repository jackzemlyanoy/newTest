import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';


const Search = ({ searchQuery, onSearchSubmit, onSearchChange }) => (
    <form action="/" className="Search" onSubmit={onSearchSubmit}>
        <input type="search" placeholder="Search..." className="Search-input" onChange={onSearchChange} value={searchQuery} />
        <i className="fas fa-search"></i>
    </form>
);

Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export default Search;