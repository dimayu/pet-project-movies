import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';

import { Loader, Genres, MoviesList } from '../index';
import { API_BASE_URL, API_KEY, API_LANG } from '../../ServiceMovies/ServiceMovies';


export const BlockGenres = () => {
    const [moviesGenres, setMoviesGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&${API_LANG}&with_genres=28&page=${page}`)
        .then(response => response.json())
        .then(data => {
            setMoviesGenres(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [page]);
    
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
            setMoviesGenres(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [setMoviesGenres, setLoading, page]);
    
    const handleChange = (event, value) => {
        setPage(value);
    };
    
    const pages = (moviesGenres.total_pages < 50) ? moviesGenres.total_pages : 50;
    
    return (
        <>
            
            <Genres
                genresMovies={genresMovies}
                genres={genres}
            />
            {loading
                ? <Loader/>
                : <>
                    <MoviesList
                        movies={moviesGenres.results}
                    />
                    <Pagination
                        count={pages}
                        page={page}
                        onChange={handleChange}
                    />
                </>
            }
        </>
    );
};