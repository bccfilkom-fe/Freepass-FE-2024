import axios from "axios";
import { BASE_URL } from "./env";
import { SearchResult } from "@models/search/SearchResult";

export const getSearchResult = async ({
  url,
  token,
}: {
  url: string;
  token: string | null;
}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`${BASE_URL}${url}`);
    return data as SearchResult;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
