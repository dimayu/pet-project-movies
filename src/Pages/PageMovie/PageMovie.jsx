import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';

import { Loader } from '../../Components/index';
import { API_BASE_URL, API_KEY, API_LANG , URL_IMG} from '../../ServiceMovies/ServiceMovies';

export const PageMovie = () => {
    const [movie, setMovie] = useState([]);
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
    }, []);
    
    return (
        <div className="block-movie">
            <div className="block-movie__bg">
                {movie.backdrop_path !== null
                    ? <img
                        src={URL_IMG + movie.backdrop_path}
                        alt={movie.title || "no title"}
                        width="100%"/>
                    : "Image Not Found"
                }
            </div>
            <div className="wrapper">
                {loading
                    ? <Loader/>
                    : <div className="movie">
                        <h2 className="movie__title">{movie.title}</h2>
                        <p className="movie__desc">{movie.overview}</p>
                        <p>{movie.tagline}</p>
                        <p>Genres: {movie.genres.map((genre) => (
                            <span key={genre.id}> {genre.name}</span>
                        ))}</p>
                        <p>rating: {movie.vote_average.toFixed(1)}</p>
                        <div className="movie__img">
                            {movie.poster_path !== null
                                ? <img
                                    src={URL_IMG + movie.poster_path}
                                    alt={movie.title || "no title"}
                                    width="258px" height="356px"/>
                                : "Image Not Found"
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}