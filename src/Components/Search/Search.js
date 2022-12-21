import React from "react";

import './Search.scss'

class Search extends React.Component {
    state = {
        search: "",
        type: "all"
    }

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="search">
                    <input
                        type="text"
                        className="search__input"
                        placeholder="search"
                        name="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="search__btn"
                        onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                    >
                        Search
                    </button>
                </div>
                <div className="sort">
                    <label className="sort__label">
                        <input type="radio"
                               name="sort"
                               className="sort__label--input"
                               data-type="all"
                               onChange={this.handleFilter}
                               checked={this.state.type === "all"}
                        />
                        <span className="sort__custom-radio"></span>
                        <span className="sort__label--text">All</span>
                    </label>
                    <label className="sort__label">
                        <input type="radio"
                               name="sort"
                               className="sort__label--input"
                               data-type="movie"
                               onChange={this.handleFilter}
                               checked={this.state.type === "movie"}
                        />
                        <span className="sort__custom-radio"></span>
                        <span className="sort__label--text">Movies</span>
                    </label>
                    <label className="sort__label">
                        <input type="radio"
                               name="sort"
                               className="sort__label--input"
                               data-type="series"
                               onChange={this.handleFilter}
                               checked={this.state.type === "series"}
                        />
                        <span className="sort__custom-radio"></span>
                        <span className="sort__label--text">Series</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Search;