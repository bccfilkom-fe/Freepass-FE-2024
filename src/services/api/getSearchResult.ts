import axios from "axios";
import { BASE_URL } from "./env";
import { SearchResult } from "@models/search/SearchResult";

export const getSearchResult = async ({
  q,
  token,
}: {
  q: string;
  token: string | null;
}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}search?q=${q}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data as SearchResult;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
