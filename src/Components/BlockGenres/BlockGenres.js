import React, { useState, useEffect } from "react";

import Loader from "../Loader/Loader";
import Genres from "../Genres/Genres";
import MoviesList from "../MoviesList/MoviesList";
import {API_BASE_URL, API_KEY, API_LANG} from "../../ServiceMovies/ServiceMovies";


function BlockGenres() {
    const [moviesGenres, setMoviesGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&${API_LANG}&with_genres=28`)
            .then(response => response.json())
            .then(data => {
                setMoviesGenres(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [moviesGenres])

    const genresMovies = (num = 28) => {
        setLoading(true);
        fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&${API_LANG}&with_genres=${num !== 28 ? `${num}` : 28}`)
            .then(response => response.json())
            .then(data => {
                setMoviesGenres(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    return (
        <>
            {loading
                ? <Loader/>
                : <Genres
                    genresMovies={genresMovies}
                />
            }
            {loading
                ? <Loader />
                : <MoviesList
                    movies={moviesGenres}
                />
            }
        </>
    )
}

export default BlockGenres;