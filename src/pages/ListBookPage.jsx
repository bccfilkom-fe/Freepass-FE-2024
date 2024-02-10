import React, { useState, useEffect } from "react";

import { ListBookFormatAnime } from "../components/ListBookFormatAnime";
import { RemoveFromList } from "../components/RemoveFromList";
import { ListBookFormatMovie } from "../components/ListBookFormatMovie";
import "../components/ListBook.css";

export default function ListBookPage() {
  const [myAnimeList, setMyAnimeList] = useState([]);
  const [myMovieList, setMyMovieList] = useState([]);

  const removeFromAnime = (anime) => {
    const newArray = myAnimeList.filter((myAnime) => {
      return myAnime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
    localStorage.setItem("MyAnimeList", JSON.stringify(newArray));
  };

  const removeFromMovie = (movie) => {
    const newArrayMovie = myMovieList.filter((myMovie) => {
      return myMovie.id !== movie.id;
    });
    setMyMovieList(newArrayMovie);
    localStorage.setItem("MyMovieList", JSON.stringify(newArrayMovie));
  };

  useEffect(() => {
    const storedAnimeList = localStorage.getItem("MyAnimeList");
    if (storedAnimeList) {
      setMyAnimeList(JSON.parse(storedAnimeList));
    }
  }, []);
  useEffect(() => {
    const storedMovieList = localStorage.getItem("MyMovieList");
    if (storedMovieList) {
      setMyMovieList(JSON.parse(storedMovieList));
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="header-listbook">
        <h1>MyListBook</h1>
      </div>

      <div className="container-listbook">
        <h1>MyAnimeList</h1>
        <ListBookFormatAnime
          animelist={myAnimeList}
          animeComponent={RemoveFromList}
          handleList={(anime) => removeFromAnime(anime)}
        />
        <hr />
        <h1>MyMovieList</h1>
          <ListBookFormatMovie
            movielist={myMovieList}
            movieComponent={RemoveFromList}
            handleList={(movie) => removeFromMovie(movie)}
          />
      </div>
    </>
  );
}
