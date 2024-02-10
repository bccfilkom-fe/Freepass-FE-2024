import axios from "axios";
import { BASE_URL } from "../env";
import { Album } from "@models/album/Album";

export const getArtistAlbum = async ({
  url,
  token,
}: {
  url: string;
  token: string | null;
}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}/albums`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return (data.items as Album[]) ?? [];
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
