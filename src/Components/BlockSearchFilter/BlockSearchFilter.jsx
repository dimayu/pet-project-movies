import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

import { Search, Loader, MoviesList } from '../index';
import { API_BASE_URL, API_KEY, API_LANG } from '../../ServiceMovies/ServiceMovies';

export const BlockSearchFilter = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&${API_LANG}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [page]);
    
    const searchMovies = (str) => {
        setLoading(true);
        fetch(`${API_BASE_URL}search/movie?api_key=${API_KEY}&${API_LANG}&query=${str}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    };
    
    const handleChange = (event, value) => {
        setPage(value);
    };
    
    const pages = (movies.total_pages < 50) ? movies.total_pages : 50;
    
    return (
        <>
            <Search
                searchMovies={searchMovies}
            />
            {loading
                ? <Loader/>
                : <>
                    <MoviesList
                        movies={movies.results}
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