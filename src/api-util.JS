import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMovieList = async (page = 1) => {
  const response = await axios.get(
    `${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`
  );
  return {
    movies: response.data.results,
    page: response.data.page,
    total_pages: response.data.total_pages,
  };
};

export const searchMovie = async (keyword) => {
  const response = await axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`
  );
  return response.data?.results;
};

export const getMovieDetails = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTUwNzc2NjI0ZThhMWYzNjYxMThiMTkyZGEwOTFlOCIsInN1YiI6IjY1YzJiMjg5Y2ZmZWVkMDE3YzUwYWRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1rkLeliUKqqPdnyWTvZgTZEvH5oNQWwN-SYtVWxKA",
    },
  };

  try {
    const response = await axios.request(options);
    return { movie: response.data };
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw error;
  }
};
