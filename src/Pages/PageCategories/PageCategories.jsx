import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Pagination from '@mui/material/Pagination';

import { Loader, MoviesList } from '../../Components/index';
import { API } from '../../API/API';

export const PageCategories = () => {
    const params = useParams();
    const category = params.categories;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState();
    
    useEffect(() => {
        setLoading(true);
        API.getMoviesCategory({
            callbackSuccess: (data) => {
                setMovies(data.results);
                setPages((data.total_pages < 50) ? data.total_pages : 50) ;
                setLoading(false);
            },
            callbackError: () => {
                setLoading(false);
            },
            page,
            category,
        });
    }, [category, page]);
    
    const handleChange = (event, value) => {
        setPage(value);
    };
    
    return (
        <>
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