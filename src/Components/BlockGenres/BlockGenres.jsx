import React, { useState, useEffect, useCallback } from 'react';

import { Loader } from '../Loader/Loader';
import { Genres } from '../Genres/Genres';
import { MoviesList } from '../MoviesList/MoviesList';
import { API_BASE_URL, API_KEY, API_LANG } from '../../ServiceMovies/ServiceMovies';


export const BlockGenres = () => {
    const [moviesGenres, setMoviesGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&${API_LANG}&with_genres=28`)
        .then(response => response.json())
        .then(data => {
            setMoviesGenres(data.results);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);
    
    useEffect(() => {
        fetch(`${API_BASE_URL}genre/movie/list?api_key=${API_KEY}&${API_LANG}`)
        .then(response => response.json())
        .then(data => {
            setGenres(data.genres);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);
    
    const genresMovies = useCallback((num = 28) => {
        setLoading(true);
        fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&${API_LANG}&with_genres=${num}`)
        .then(response => response.json())
        .then(data => {
            setMoviesGenres(data.results);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [setMoviesGenres, setLoading]);
    
    return (
        <>
            
            <Genres
                genresMovies={genresMovies}
                genres={genres}
            />
            {loading
                ? <Loader/>
                : <MoviesList
                    movies={moviesGenres}
                />
            }
        </>
    );
};