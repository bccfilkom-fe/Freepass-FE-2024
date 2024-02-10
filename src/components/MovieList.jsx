export const MovieList = ({ movie, movieComponent, handleList }) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const MovieAddToList = movieComponent;
  return (
    <div className="movie-list">
      <img src={img_path + movie.poster_path} className="poster" alt="" />
      <div className="movie-over">
        <div className="box">
          <h4 className="title">{movie.title}</h4>
          <p className="rating">{movie.vote_average}</p>
        </div>
        <div className="movie-overlay">
          <div className="movie-synopsis">
            <p>{movie.overview}</p>
          </div>
          <MovieAddToList 
          handleAddToList={() => handleList(movie)} />
        </div>
      </div>
    </div>
  );
};
