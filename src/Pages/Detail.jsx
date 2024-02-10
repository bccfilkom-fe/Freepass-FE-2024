import React, { useEffect, useState, useContext } from "react";
import { getMovieDetails } from "../api.JS";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import { GlobalContext } from "../context/GlobalState";

const Detail = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  const { addMovieToWatchlist } = useContext(GlobalContext);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { movie } = await getMovieDetails(id);
        setDetail(movie);
        console.log(movie);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      }
    };

    fetchDetails();
  }, [id]);

  if (!detail) {
    return <Loading></Loading>;
  }

  return (
    <div className="movie-page">
      <div className="container">
        <h1 className="font-bold text-3xl">{detail.title}</h1>
        <div className="flex sm:flex-row flex-col mt-6">
          <img
            src={`${import.meta.env.VITE_BASEIMGURL}${detail.poster_path}`}
            alt=""
            className="detail-poster rounded-md"
          />

          <div className="sm:p-6">
            <p className="font- sm:text-2xl text-lg">{detail.overview}</p>
            <div className="mt-2 ">
              {detail.genres.map((genre, index) => (
                <button
                  key={index}
                  className="border mx-1 border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 font-bold py-2 px-4 rounded-full"
                >
                  {typeof genre === "object" ? genre.name : genre}
                </button>
              ))}
            </div>
            <div
              className="btn mt-4"
              onClick={() => addMovieToWatchlist(detail)}
            >
              Add To Watchlist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
