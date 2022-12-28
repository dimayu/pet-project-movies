import {URL_IMG} from "../../ServiceMovies/ServiceMovies"

import './Movie.scss'

function Movie(props) {
    const {
        title,
        release_date,
        vote_average,
        poster_path
    } = props;
    return (
        <div className="card">
            <div className="card__img">
                {poster_path !== null
                    ? <img
                        src={URL_IMG + poster_path}
                        alt={title || "no title"}
                        width="258px" height="356px"/>
                    : "Image Not Found"
                }
            </div>
            <div className="card__content">
                <h4 className="card__content--title">{title || "no title"}</h4>
                <div className="card__content--description">
                    <span>{release_date || "||||-||-||"}</span>
                    <span>{vote_average}</span>
                </div>
            </div>
        </div>
    )
}

export default Movie;