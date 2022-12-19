import './Movie.scss'

function Movie(props) {
    const {
        Title,
        Year,
        imdbid,
        Type,
        Poster
    } = props;
    return (
        <div className="card">
            <div className="card__img">
                <img src={Poster} alt={Title}/>
            </div>
            <div className="card__content">
                <h4 className="card__content--title">{Title}</h4>
                <div className="card__content--description">
                    <span>{Year}</span>
                    <span>{Type}</span>
                </div>
            </div>
        </div>
    )
}

export default Movie;