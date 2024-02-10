import axios from "axios";
import { BASE_URL } from "../env";
import { FollowedArtist } from "@models/artist/FollowedArtist";

export const getFollowedArtist = async ({
  url,
  token,
}: {
  url: string;
  token: string | null;
}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}?`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.items as FollowedArtist ?? [];
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
