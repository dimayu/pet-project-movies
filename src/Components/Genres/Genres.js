import React, { useState, useEffect } from "react";

import './Genres.scss'
import {API_BASE_URL, API_KEY, API_LANG} from "../../ServiceMovies/ServiceMovies";

function Genres(props) {
    const {
        genresMovies = Function.prototype
    } = props;

    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [num, setNum] = useState(28);

    useEffect(() => {
        fetch(`${API_BASE_URL}genre/movie/list?api_key=${API_KEY}&${API_LANG}`)
            .then(response => response.json())
            .then(data => {
                setGenres(data.genres);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [genres])

    const handleFilterGenres = (event) => {
        setNum(event.target.dataset.genre);
        genresMovies(event.target.dataset.genre);
    }

    return (
        <div className="genres">
            <div className="wrapper">
                <div className="genres__items">
                    {genres.map(genre => (
                        <label className="genres__items__item"
                               key={genre.id}
                               id={genre.id}
                        >
                            <input type="radio"
                                   name="genre"
                                   className="genres__items__item--input"
                                   data-genre={genre.id}
                                   onChange={handleFilterGenres}
                                   checked={num === genre.id}
                            />
                            <span className="sort__label--text">{genre.name}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Genres;