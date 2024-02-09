import axios from "axios";
import { BASE_URL } from "../env";
import { Recommendation } from "@models/Recommendation";

export const get8RecommendationTrack = async ({
  url,
  token,
}: {
  url: string;
  token: string | null;
}) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${url}?limit=8&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=jpop`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(`${BASE_URL}${url}`);
    return data as Recommendation;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
export const getRecommendationTrack = async ({
  url,
  token,
}: {
  url: string;
  token: string | null;
}) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${url}?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=jpop`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(`${BASE_URL}${url}`);
    return data as Recommendation;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
