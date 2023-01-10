export const MovieTrailer = (props) => {
  const {title, trailer} = props;
  
  return (
    <>
      <h3 className="movie-desc--title">{title}</h3>
      <div className="movie-trailer">
        {Boolean(trailer?.length) ? trailer.slice(0, 1).map((video) => (
            <iframe key={video.key} width="1041" height="586"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          ))
          : "Trailer Not Found"
        }
      </div>
    </>
  );
};