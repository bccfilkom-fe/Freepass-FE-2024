import axios from "axios";
import { BASE_URL } from "../env";
import { Item } from "@models/playlist/Item";
import { PlaylistById } from "@models/playlist/PlaylistById";

export const getUserPlaylist = async ({
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
    return data.items as Item[];
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};

export const getUserPlaylistById = async ({
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
    return data as PlaylistById;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};