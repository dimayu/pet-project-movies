import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';

import { Loader, MovieContent, MovieActors, MovieCrew, MovieTrailer } from '../../Components/index';
import { API_BASE_URL, API_KEY, API_LANG } from '../../ServiceMovies/ServiceMovies';

import './PageMovie.scss';

export const PageMovie = () => {
  const [movie, setMovie] = useState({});
  const [movieCrews, setMovieCrews] = useState([]);
  const [movieActors, setMovieActors] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const param = useParams();
  const id = param.movieId;
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&${API_LANG}`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setMovie(data);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [id]);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&${API_LANG}`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setMovieCrews(data.crew);
        setMovieActors(data.cast);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [id]);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&${API_LANG}`)
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        setTrailer(data.results);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [id]);
  
  return (
    <>
      <div className="movie">
        {loading
          ? <Loader/>
          : <MovieContent movie={movie}/>
        }
        <div className="movie-desc">
          <div className="wrapper">
            {loading
              ? <Loader/>
              : <MovieActors title={"Cast"} movie={movieActors}/>
            }
            {loading
              ? <Loader/>
              : <MovieCrew title={"Worked on the movie"} movie={movieCrews}/>
            }
            {loading
              ? <Loader/>
              : <MovieTrailer title={"Trailer"} trailer={trailer}/>
            }
          </div>
        </div>
      </div>
    </>
  );
};