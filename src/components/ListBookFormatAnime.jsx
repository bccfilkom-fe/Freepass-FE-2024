import React from "react";
import "./ListBook.css";

export const ListBookFormatAnime = ({
  animelist,
  animeComponent,
  handleList,
}) => {
  const AnimeAddToList = animeComponent;
  return (
    <div className="anime-list-listbook">
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div className="card-listbook" key={index}>
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-over-listbook">
                  <h4>{anime.title}</h4>
                  <div className="overlay-listbook">
                    <div className="synopsis-listbook">
                      <p>{anime.synopsis}</p>
                    </div>
                    <AnimeAddToList 
                    handleRemoveToList ={() => handleList(anime)}/>
                  </div>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </div>
  );
};
