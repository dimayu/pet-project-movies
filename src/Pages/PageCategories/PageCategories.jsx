import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Pagination from '@mui/material/Pagination';

import { Loader, MoviesList } from '../../Components/index';
import { API_BASE_URL, API_KEY, API_LANG } from '../../ServiceMovies/ServiceMovies';

export const PageCategories = () => {
    const params = useParams();
    const category = params.categories;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}movie/${category}?api_key=${API_KEY}&${API_LANG}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [category, page]);
    
    const handleChange = (event, value) => {
        setPage(value);
    };
    
    const pages = (movies.total_pages < 50) ? movies.total_pages : 50;
    
    return (
        <>
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