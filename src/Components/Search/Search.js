import React, { useState } from "react";

import './Search.scss'

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
        filterMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('top_rated');

    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchMovies(search)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        filterMovies(event.target.dataset.type);
    }

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
                    onClick={() => searchMovies(search, type)}
                >
                    Search
                </button>
            </div>
            <div className="sort">
                <label className="sort__label">
                    <input type="radio"
                           name="sort"
                           className="sort__label--input"
                           data-type="top_rated"
                           onChange={handleFilter}
                           checked={type === "top_rated"}
                    />
                    <span className="sort__custom-radio"></span>
                    <span className="sort__label--text">Top</span>
                </label>
                <label className="sort__label">
                    <input type="radio"
                           name="sort"
                           className="sort__label--input"
                           data-type="upcoming"
                           onChange={handleFilter}
                           checked={type === "upcoming"}
                    />
                    <span className="sort__custom-radio"></span>
                    <span className="sort__label--text">Upcoming</span>
                </label>
                <label className="sort__label">
                    <input type="radio"
                           name="sort"
                           className="sort__label--input"
                           data-type="popular"
                           onChange={handleFilter}
                           checked={type === "popular"}
                    />
                    <span className="sort__custom-radio"></span>
                    <span className="sort__label--text">Popular</span>
                </label>
            </div>
        </div>
    )
}

export default Search;