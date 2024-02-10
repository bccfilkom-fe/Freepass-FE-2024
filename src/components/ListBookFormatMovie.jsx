import React from "react";

export const ListBookFormatMovie = ({
  movielist,
  movieComponent,
  handleList,
}) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const MovieAddToList = movieComponent;
  return (
    <div className="movie-container-listbook">
      {movielist.map((movie, index) => (
        <div key={index} className="movie-list-listbook">
          <img src={img_path + movie.poster_path} className="poster-listbook" alt="" />
          <div className="movie-over-listbook">
            <div className="box-listbook">
              <h4 className="title-listbook">{movie.title}</h4>
              <p className="rating-listbook">{movie.vote_average}</p>
            </div>
            <div className="movie-overlay-listbook">
              <div className="movie-synopsis-listbook">
                <p>{movie.overview}</p>
              </div>
              <MovieAddToList 
              handleRemoveToList ={() => handleList(movie)}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
