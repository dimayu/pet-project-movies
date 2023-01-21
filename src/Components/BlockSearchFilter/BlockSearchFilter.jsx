import React, { useState, useEffect } from 'react';

import Pagination from '@mui/material/Pagination';

import { Search, Loader, MoviesList } from '../index';
import { API } from '../../API/API';

export const BlockSearchFilter = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState();
    
    useEffect(() => {
        setLoading(true);
        API.getMoviesList({
            callbackSuccess: (data) => {
                setMovies(data.results);
                setPages((data.total_pages < 50) ? data.total_pages : 50) ;
                setLoading(false);
            },
            callbackError: () => {
                setLoading(false);
            },
            page,
        });
    }, [page]);
    
    const searchMovies = (str) => {
        setLoading(true);
        API.getMoviesSearch({
            callbackSuccess: (data) => {
                setMovies(data.results);
                setPages((data.total_pages < 50) ? data.total_pages : 50) ;
                setLoading(false);
            },
            callbackError: () => {
                setLoading(false);
            },
            page,
            str,
        });
    };
    
    const handleChange = (event, value) => {
        setPage(value);
    };
    
    return (
        <>
            <Search
                searchMovies={searchMovies}
            />
            {loading
                ? <Loader/>
                : <>
                    <MoviesList
                        movies={movies}
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