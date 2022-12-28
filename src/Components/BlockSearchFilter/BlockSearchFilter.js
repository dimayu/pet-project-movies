import React, { useState, useEffect } from "react";

import Search from "../Search/Search";
import Loader from "../Loader/Loader";
import MoviesList from "../MoviesList/MoviesList";
import {API_BASE_URL, API_KEY, API_LANG} from "../../ServiceMovies/ServiceMovies";

function BlockSearchFilter() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&${API_LANG}&page=1`)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [])

    const filterMovies = (type = "top_rated") => {
        setLoading(true);
        fetch(`${API_BASE_URL}movie/${type !== "top_rated" ? `${type}` : "top_rated"}?api_key=${API_KEY}&${API_LANG}&page=1`)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    const searchMovies = (str) => {
        setLoading(true);
        fetch(`${API_BASE_URL}search/movie/?api_key=${API_KEY}&${API_LANG}&query=${str}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    const paginationList = (page = 1) => {
        fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&${API_LANG}&page=${page !== 1 ? `${page}` : "1"}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    return (
        <>
            <Search
                searchMovies={searchMovies}
                filterMovies={filterMovies}
            />
            {loading
                ? <Loader />
                : <MoviesList
                    movies={movies}
                    paginationList={paginationList}
                />
            }
        </>
    )
}

export default BlockSearchFilter;