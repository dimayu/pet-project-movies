import Movie from "../Movie/Movie";

import './MoviesList.scss';

function MoviesList(props) {
    const {movies = []} = props;
    return (
        <div className="wrapper">
            <div className="cards-list">
                {movies.length ? movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                )) : <h4 className="not-found">Nothing found</h4>}
            </div>
        </div>
    )
}

export default MoviesList;