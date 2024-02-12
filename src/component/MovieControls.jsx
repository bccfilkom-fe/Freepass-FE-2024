import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
