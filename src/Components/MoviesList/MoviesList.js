import {useState} from "react";
import Movie from "../Movie/Movie";

import './MoviesList.scss';

function MoviesList(props) {
    const {movies = []} = props;
    const [length, setLength] = useState(4);
    const [toggleClass, setToggleClass] = useState(false);

    function handleClickShow() {
        setToggleClass(true);
        setLength();
    }

    function handleClickHide() {
        setToggleClass(false);
        setLength(4);
    }

    return (
        <section>
            <div className="wrapper">
                {
                    toggleClass === false
                        ? <button
                            onClick={handleClickShow}
                            className="btn"
                        >Show more</button>
                        : <button onClick={handleClickHide}
                                  className="btn"
                        >Hide</button>
                }
                <div className="cards-list">
                    {movies.results.length ? movies.results.slice(0, length).map(movie => (
                        <Movie key={movie.id} {...movie}/>
                    )) : <h4 className="not-found">Nothing found</h4>}
                </div>
            </div>
        </section>
    )
}

export default MoviesList;