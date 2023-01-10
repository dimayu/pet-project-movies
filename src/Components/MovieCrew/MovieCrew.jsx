import { URL_IMG } from '../../ServiceMovies/ServiceMovies';

export const MovieCrew = (props) => {
  const {title, movie} = props;
  
  return (
    <>
      <h3 className="movie-desc--title">{title}</h3>
      <div className="movie-desc__cast">
          {Boolean(movie?.length) ? movie.slice(0, 6).map((crew) => (
            <div key={crew.credit_id} id={crew.credit_id}
                 className="movie-desc__cast__item">
              <div className="movie-desc__cast__item--img">
                {crew.profile_path !== null
                  ? <img
                    src={URL_IMG + crew.profile_path}
                    alt={crew.name || "no title"}
                    width="258px" height="356px"/>
                  : "Image Not Found"
                }
              </div>
              <h3 className="movie-desc__cast__item--name">{crew.name}</h3>
              <h4 className="movie-desc__cast__item--character">{crew.job}</h4>
            </div>
          )) : <h4 className="not-found">Nothing found</h4>}
      </div>
    </>
  );
}