import { URL_IMG } from '../../ServiceMovies/ServiceMovies';

export const MovieActors = (props) => {
  const {title, movie} = props;
  
  return (
    <>
      <h3 className="movie-desc--title">{title}</h3>
      <div className="movie-desc__cast">
          {Boolean(movie?.length) ? movie.slice(0, 6).map((role) => (
            <div key={role.id} className="movie-desc__cast__item">
              <div className="movie-desc__cast__item--img">
                {role.profile_path !== null
                  ? <img
                    src={URL_IMG + role.profile_path}
                    alt={role.original_name || "no title"}
                    width="258px" height="356px"/>
                  : "Image Not Found"
                }
              </div>
              <h3 className="movie-desc__cast__item--name">{role.original_name}</h3>
              <h4 className="movie-desc__cast__item--character">{role.character}</h4>
            </div>
          )) : <h4 className="not-found">Nothing found</h4>}
        </div>
    </>
  );
}