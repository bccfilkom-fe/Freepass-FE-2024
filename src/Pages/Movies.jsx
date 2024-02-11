import React, { useEffect, useState } from "react";
import { getMovieList } from "../api-util.JS";
import Pagination from "../component/Pagination";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

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
              </div>
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
