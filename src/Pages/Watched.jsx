import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../component/MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="font-bold text-3xl">Watched Movies</h1>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                type="watched"
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
export default Watched;
