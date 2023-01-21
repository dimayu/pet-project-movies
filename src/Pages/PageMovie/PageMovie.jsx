import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';

import { Loader, MovieContent, MovieActors, MovieCrew, MovieTrailer } from '../../Components/index';

import './PageMovie.scss';
import { API } from '../../API/API';

export const PageMovie = () => {
  const [movie, setMovie] = useState({});
  const [movieCrews, setMovieCrews] = useState([]);
  const [movieActors, setMovieActors] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const param = useParams();
  const id = param.movieId;
  
  useEffect(() => {
    setLoading(true);
    API.getMovieDescription({
      callbackSuccess: (data) => {
        setMovie(data);
        setLoading(false);
      },
      callbackError: () => {
        setLoading(false);
      },
      id,
    });
  }, [id]);
  
  useEffect(() => {
    setLoading(true);
    API.getMovieActors({
      callbackSuccess: (data) => {
        setMovieCrews(data.crew);
        setMovieActors(data.cast);
        setLoading(false);
      },
      callbackError: () => {
        setLoading(false);
      },
      id,
    });
  }, [id]);
  
  useEffect(() => {
    setLoading(true);
    API.getMovieTrailers({
      callbackSuccess: (data) => {
        setTrailer(data.results);
        setLoading(false);
      },
      callbackError: () => {
        setLoading(false);
      },
      id,
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