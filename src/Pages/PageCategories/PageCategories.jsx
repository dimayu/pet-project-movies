import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

import { Loader, MoviesList } from '../../Components/index';
import { API_BASE_URL, API_KEY, API_LANG } from '../../ServiceMovies/ServiceMovies';

export const PageCategories = () => {
    const params = useParams();
    const category = params.categories;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}movie/${category}?api_key=${API_KEY}&${API_LANG}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [category]);
    
    return (
        <>
            {loading
                ? <Loader/>
                : <MoviesList
                    movies={movies}
                />
            }
        </>
    );
};