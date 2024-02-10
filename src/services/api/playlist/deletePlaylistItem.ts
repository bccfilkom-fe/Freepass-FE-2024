import axios from "axios";
import { BASE_URL } from "../env";

export const deletePlaylistItem = async ({
  playlistId,
  trackUri,
  snapshotId,
  token,
}: {
  playlistId: string;
  trackUri: string;
  snapshotId: string;
  token: string;
}) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {
          tracks: [
            { 
                uri: trackUri 
            }
        ],
          snapshot_id: snapshotId,
        },
      }
    );

    console.log("Delete response:", response.data);
  } catch (error) {
    console.error("Error deleting track:", error);
  }
};
