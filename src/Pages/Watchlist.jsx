import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../component/MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="font-bold text-3xl">My watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                type="watchlist"
              ></MovieCard>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies in list - add some</h2>
        )}
      </div>
    </div>
  );
};
export default Watchlist;
