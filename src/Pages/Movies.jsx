// Movies.jsx
import React, { useEffect, useState, useContext } from "react";
import { getMovieList } from "../api-util.js";
import Pagination from "../component/Pagination";
import { GlobalContext } from "../context/GlobalState.jsx";
import { Link } from "react-router-dom";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { addMovieToWatchlist } = useContext(GlobalContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await getMovieList(page);
        setMoviesList(result.movies || []);
        setLastPage(result.total_pages || 1);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="font-bold text-3xl">All Movies</h1>
          </div>
          <div className="movie-grid">
            {moviesList.map((movie) => (
              <Link to={`/movies/detail/${movie.id}`} key={movie.id}>
                <div className="movie-card">
                  <div className="overlay"></div>

                  {movie.poster_path ? (
                    <img
                      src={`${import.meta.env.VITE_BASEIMGURL}${
                        movie.poster_path
                      }`}
                      alt={movie.title}
                    />
                  ) : (
                    <div className="filler-poster"></div>
                  )}
                  <div className="inner-card-controls">
                    <button
                      className="ctrl-btn"
                      onClick={() => addMovieToWatchlist(movie)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Pagination
            page={page}
            lastPage={lastPage}
            setPage={setPage}
          ></Pagination>
        </div>
      </div>
    </>
  );
};

export default Movies;
