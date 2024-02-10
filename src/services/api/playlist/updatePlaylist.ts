import { PlaylistEditableData } from "@models/playlist/PlaylistEditableData";
import { BASE_URL } from "../env";
import axios from "axios";

export const updatePlaylist = async ({
  id,
  data,
}: {
  id: string;
  data: PlaylistEditableData;
}) => {
  const url = `${BASE_URL}playlists/${id}`;
  const token = window.localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  await axios.put(url, data, config);
};
