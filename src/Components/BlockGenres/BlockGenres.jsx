import React, { useState, useEffect, useCallback } from 'react';

import Pagination from '@mui/material/Pagination';

import { Loader, Genres, MoviesList } from '../index';
import { API } from '../../API/API';


export const BlockGenres = () => {
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pages, setPages] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    setLoading(true);
    API.getMoviesGenres({
      callbackSuccess: (data) => {
        setMoviesGenres(data.results);
        setPages((data.total_pages < 50) ? data.total_pages : 50) ;
        setLoading(false);
      },
      callbackError: () => {
        setLoading(false);
      },
      subCategory: 28,
      page: page,
    });
  }, [page]);
  
  useEffect(() => {
    setLoading(true);
    API.getMoviesGenresList({
      callbackSuccess: (data) => {
        setGenres(data.genres);
        setLoading(false);
      },
      callbackError: () => {
        setLoading(false);
      },
    });
  }, []);
  
  const genresMovies = useCallback((num = 28) => {
    setLoading(true);
    API.getMoviesGenres({
      callbackSuccess: (data) => {
        setMoviesGenres(data.results);
        setLoading(false);
      },
      callbackError: () => {
        setLoading(false);
      },
      subCategory: num,
      page: page
    });
  }, [page]);
  
  const handleChange = (event, value) => {
    setPage(value);
  };
  
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
            movies={moviesGenres}
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