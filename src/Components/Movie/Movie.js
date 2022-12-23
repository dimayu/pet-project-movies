import './Movie.scss'

function Movie(props) {
    const URL_IMG = "https://image.tmdb.org/t/p/original";
    const {
        title,
        release_date,
        vote_average,
        poster_path
    } = props;
    return (
        <div className="card">
            <div className="card__img">
                <img src={URL_IMG + poster_path} alt={title} width="258px" height="356px"/>
            </div>
            <div className="card__content">
                <h4 className="card__content--title">{title}</h4>
                <div className="card__content--description">
                    <span>{release_date}</span>
                    <span>{vote_average}</span>
                </div>
            </div>
        </div>
    )
}

export default Movie;