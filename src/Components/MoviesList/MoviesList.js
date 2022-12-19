import Movie from "../Movie/Movie";

import './MoviesList.scss';

function MoviesList(props) {
    const {movies} = props;
    return (
        <div className="wrapper">
            <div className="cards-list">
                {movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                ))}
            </div>
        </div>
    )
}

export default MoviesList;