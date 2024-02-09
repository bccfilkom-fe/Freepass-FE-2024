import { getUserPlaylistById } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { useParams } from "react-router-dom";

const PlaylistDetails = () => {
  const { id } = useParams<string>();
  const { data } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      console.log(`me/playlists/${id}`);
      return getUserPlaylistById({ url: `me/playlists/${id}`, token });
    },
    queryKey: ["playlistId"],
  });
  console.log(data);

  return <div></div>;
};

export default PlaylistDetails;
