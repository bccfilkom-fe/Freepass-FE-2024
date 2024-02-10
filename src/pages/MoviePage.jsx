import React, { useEffect, useState } from "react";
import "./Movie.css";

import { AddToList } from "../components/AddToList";
import { MovieList } from "../components/MovieList";

export default function MoviePage() {
  let API_key = "&api_key=974e1545ce9162c880f5f00d849653b1";
  let BASE_url = "https://api.themoviedb.org/3";
  let url = BASE_url + "/discover/movie?sort_by=popularity.desc" + API_key;
  let arr = ["Popular", "Family", "Horror"];

  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [myMovieList, setMyMovieList] = useState([]);
  const [search, setSearch] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const addTo = (movie) => {
    const movieExists = myMovieList.some((myMovie) => myMovie.id === movie.id);

    if (!movieExists) {
      const newArrayMovie = [...myMovieList, movie];
      setMyMovieList(newArrayMovie);
      localStorage.setItem("MyMovieList", JSON.stringify(newArrayMovie));
      setShowPopup(true);
    }
  };

  useEffect(() => {
    const storedMovieList = localStorage.getItem("MyMovieList");
    if (storedMovieList) {
      setMyMovieList(JSON.parse(storedMovieList));
    }
  }, []);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url_set]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = async () => {
    url = BASE_url + `/search/movie?query=${search}` + API_key;
    setUrl(url);
  };

  const getData = (movieType) => {
    if (movieType == "Popular") {
      url = BASE_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType == "Family") {
      url =
        BASE_url +
        "/discover/movie?sort_by=popularity.desc&with_genres=10751" +
        API_key;
    }
    if (movieType == "Horror") {
      url =
        BASE_url +
        "/discover/movie?sort_by=popularity.desc&with_genres=27" +
        API_key;
    }
    setUrl(url);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="header-movie">
        <h1>MyMovieList</h1>
        <nav className="genre">
          <ul className="genre-list">
            {arr.map((value) => {
              return (
                <li className="genre-item">
                  <a
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="search-box-movie">
          <input
            type="search-movie"
            placeholder="Search for a movie"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="movie-container">
        {movieData.length == 0 ? (
          <p className="notfound">Movie Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return (
              <MovieList
                key={pos}
                movie={res}
                movieComponent={AddToList}
                handleList={(movie) => addTo(movie)}
              />
            );
          })
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <p>Successfully added to the list!</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
}
