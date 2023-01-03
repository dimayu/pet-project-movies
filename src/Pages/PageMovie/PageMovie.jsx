import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';

import { Loader } from '../../Components/index';
import { API_BASE_URL, API_KEY, API_LANG, URL_IMG } from '../../ServiceMovies/ServiceMovies';

import './PageMovie.scss';

export const PageMovie = () => {
    const [movie, setMovie] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const param = useParams();
    const id = param.movieId;
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&${API_LANG}`)
        .then(response => response.json())
        .then(data => {
            setMovie(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [id]);
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&${API_LANG}`)
        .then(response => response.json())
        .then(data => {
            setMovieCredits(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [id]);
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&${API_LANG}`)
        .then(response => response.json())
        .then(data => {
            setTrailer(data);
            console.log(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [id]);
    
    const blockStyle = {
        backgroundImage: `url(${URL_IMG + movie.backdrop_path})`
    };
    
    return (
        <>
            
                <div className="movie">
                    {loading
                        ? <Loader/>
                        : <div className="movie-content" style={blockStyle}>
                            <div className="wrapper">
                                <div className="movie-content__items">
                                    <div className="movie-content__left">
                                        <h2 className="movie-content__title">{movie.title}</h2>
                                        <p className="movie-content__desc">{movie.overview}</p>
                                        <div className="movie-content__genres">
                                            <span className="movie-content__genres--title">Genres:</span>
                                            <div className="movie-content__genres__items">
                                                {movie?.genres?.map((genre) => (
                                                    <span key={genre.id}
                                                          className="movie-content__genres__items__item"> {genre.name}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="movie-content__rating">
                                            <span
                                                className="movie-content__rating--title">Rating:</span> {movie?.vote_average?.toFixed(1)}
                                        </div>
                                    </div>
                                    <div className="movie-content__right">
                                        <div className="movie-content__img">
                                            {movie.poster_path !== null
                                                ? <img
                                                    src={URL_IMG + movie.poster_path}
                                                    alt={movie.title || "no title"}
                                                    width="258px" height="356px"/>
                                                : "Image Not Found"
                                            }
                                        </div>
                                        <h3 className="movie-content__tagline">{movie.tagline}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="movie-desc">
                        <div className="wrapper">
                            <h3 className="movie-desc--title">Cast</h3>
                            {loading
                                ? <Loader/>
                                : <div className="movie-desc__cast">
                                    {movieCredits?.cast?.length ? movieCredits.cast.slice(0, 6).map((role) => (
                                        <div key={role.id} className="movie-desc__cast__item">
                                            <div className="movie-desc__cast__item--img">
                                                {role.profile_path !== null
                                                    ? <img
                                                        src={URL_IMG + role.profile_path}
                                                        alt={role.original_name || "no title"}
                                                        width="258px" height="356px"/>
                                                    : "Image Not Found"
                                                }
                                            </div>
                                            <h3 className="movie-desc__cast__item--name">{role.original_name}</h3>
                                            <h4 className="movie-desc__cast__item--character">{role.character}</h4>
                                        </div>
                                    )) : <h4 className="not-found">Nothing found</h4>}
                                </div>
                            }
                            <h3 className="movie-desc--title">Worked on the movie</h3>
                            {loading
                                ? <Loader/>
                                : <div className="movie-desc__cast">
                                    {movieCredits?.crew?.length !== 0 ? movieCredits.crew.slice(0, 6).map((crew) => (
                                        <div key={crew.credit_id} id={crew.credit_id}
                                             className="movie-desc__cast__item">
                                            <div className="movie-desc__cast__item--img">
                                                {crew.profile_path !== null
                                                    ? <img
                                                        src={URL_IMG + crew.profile_path}
                                                        alt={crew.name || "no title"}
                                                        width="258px" height="356px"/>
                                                    : "Image Not Found"
                                                }
                                            </div>
                                            <h3 className="movie-desc__cast__item--name">{crew.name}</h3>
                                            <h4 className="movie-desc__cast__item--character">{crew.job}</h4>
                                        </div>
                                    )) : <h4 className="not-found">Nothing found</h4>}
                                </div>
                            }
                            <h3 className="movie-desc--title">Trailer</h3>
                            {loading
                                ? <Loader/>
                                : <div className="movie-trailer">
                                    {trailer.results.length !== 0 ? trailer?.results?.slice(0, 1).map((video) => (
                                            <iframe key={video.key} width="1041" height="586"
                                                    src={`https://www.youtube.com/embed/${video.key}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen></iframe>
                                        ))
                                        : "Trailer Not Found"
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};