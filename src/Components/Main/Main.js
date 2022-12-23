import React, { useState, useEffect } from "react";

import Search from "../Search/Search";
import MoviesList from "../MoviesList/MoviesList";
import Loader from "../Loader/Loader";

import './Main.scss';

const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_LANG = "language=en-US"

function Main() {
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

    const paginationList = (num, page = 1) => {
        fetch(`${API_BASE_URL}top_rated?api_key=${API_KEY}&${API_LANG}&page=${num}${page !== 1 ? `${page}` : "1"}`)
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

    return (
        <main className="main">
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
        </main>
    )
}

export default Main;