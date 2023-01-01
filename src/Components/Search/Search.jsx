import React, { useState } from 'react';

import './Search.scss';

export const Search = (props) => {
    const {
        searchMovies
    } = props;
    
    const [search, setSearch] = useState('');
    
    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search);
            setSearch('');
        }
    };
    
    return (
        <div className="wrapper">
            <div className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="search"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="search__btn"
                    onClick={() => searchMovies(search, setSearch(''))}
                >
                    Search
                </button>
            </div>
        </div>
    );
};