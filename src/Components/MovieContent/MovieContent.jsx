import { URL_IMG } from '../../API/API';

export const MovieContent = (props) => {
  const {movie} = props;
  
  const blockStyle = {
    backgroundImage: `url(${URL_IMG + movie.backdrop_path})`
  };
  
  return (
    <div className="movie-content" style={blockStyle}>
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
                        className="movie-content__genres__items__item">
                            {genre.name}
                        </span>
                ))}
              </div>
            </div>
            <div className="movie-content__rating">
              <span className="movie-content__rating--title">Rating:</span>
              {movie?.vote_average?.toFixed(1)}
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
  )
}