import React, { useEffect, useState } from "react";
import "./Anime.css";

import { AnimeList } from "../components/AnimeList";
import { AnimeInfo } from "../components/AnimeInfo";
import { AddToList } from "../components/AddToList";

export default function Anime() {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myAnime) => {
      return myAnime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
      localStorage.setItem("MyAnimeList", JSON.stringify(newArray));
      setShowPopup(true);
    }
  };
  
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const data = await response.json();
    setAnimeData(data.data);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const storedAnimeList = localStorage.getItem("MyAnimeList");
    if (storedAnimeList) {
      setMyAnimeList(JSON.parse(storedAnimeList));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header">
        <h1>MyAnimeList</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search for an anime"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="container">
        <div className="anime-info">
          <h2 className="text-heading">Info Anime</h2>
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <div className="title-side">
            <h2>Anime</h2>
          </div>
          <div className="row">
            <AnimeList
              animelist={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddToList}
              handleList={(anime) => addTo(anime)}
            />
          </div>
        </div>
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
