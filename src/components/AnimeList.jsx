import React from "react";

export const AnimeList = ({
  animelist,
  setAnimeInfo,
  animeComponent,
  handleList,
}) => {
  const AnimeAddToList = animeComponent;
  return (
    <div className="anime-list">
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => setAnimeInfo(anime)}
              >
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-over">
                  <h4>{anime.title}</h4>
                  <div className="overlay" >
                    <div className="synopsis">
                      <p>{anime.synopsis}</p>
                    </div>
                    <AnimeAddToList 
                    handleAddToList={() => handleList(anime)}/>
                  </div>
                </div>
              </div>
            );
          })
        : "Anime Not Found"}
    </div>
  );
};
