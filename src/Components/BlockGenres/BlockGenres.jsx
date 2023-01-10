import React, { useState, useEffect, useCallback } from 'react';

import Pagination from '@mui/material/Pagination';

import { Loader, Genres, MoviesList } from '../index';
import { API_BASE_URL, API_KEY, API_LANG } from '../../ServiceMovies/ServiceMovies';


export const BlockGenres = () => {
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pages, setPages] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&${API_LANG}&with_genres=28&page=${page}`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setMoviesGenres(data.results);
        setPages((data.total_pages < 50) ? data.total_pages : 50) ;
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [page]);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}genre/movie/list?api_key=${API_KEY}&${API_LANG}`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setGenres(data.genres);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);
  
  const genresMovies = useCallback((num = 28) => {
    setLoading(true);
    fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&${API_LANG}&with_genres=${num}`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setMoviesGenres(data.results);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
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