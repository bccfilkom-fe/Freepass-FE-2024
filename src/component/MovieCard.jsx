import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img
          src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls type={type} movie={movie}></MovieControls>
    </div>
  );
};
export default MovieCard;
