import React, { useState, useCallback } from 'react';

import './Genres.scss';

export const Genres = (props) => {
    const {
        genresMovies,
        genres = []
    } = props;
    
    const [num, setNum] = useState("28");
    
    const handleFilterGenres = useCallback( (event) => {
        setNum(event.target.dataset.genre);
        genresMovies(event.target.dataset.genre);
    }, [num]);
    
    return (
        <section className="genres">
            <div className="wrapper">
                <div className="genres__items">
                    {genres.map(genre => (
                        <label className="genres__items__item"
                               key={genre.id}
                        >
                            <input type="radio"
                                   name="genre"
                                   className="genres__items__item--input"
                                   data-genre={genre.id}
                                   onChange={handleFilterGenres}
                                   checked={num === '' + genre.id}
                            />
                            <span className="genres__custom-radio"></span>
                            <span className="genres__label--text">{genre.name}</span>
                        </label>
                    ))}
                </div>
            </div>
        </section>
    );
};