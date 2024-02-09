import { ItemById } from "@models/playlist/Item";
import { getUserPlaylistById } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { convertTime } from "@utils/convertTime";
import { useParams } from "react-router-dom";

const PlaylistDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserPlaylistById({ url: `playlists/${id}`, token });
    },
    queryKey: ["playlistDetail"],
  });
  console.log(data);

  return (
    <>
      {isLoading ? (
        <div>loading..</div>
      ) : (
        <div className="shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 p-20">
            <img src={data?.images[0].url} alt="" className="w-96 h-96"/>
            <div className="flex flex-col justify-end gap-2">
              <h1>{data?.name}</h1>
              <span>Owned By: {data?.owner.display_name}</span>
              <p>{data?.tracks.total} song</p>
            </div>
          </div>
          <div className="p-20">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left pr-4">Song</th>
                  <th className="md:text-center">Album</th>
                  <th className="text-center hidden md:block">Duration</th>
                </tr>
              </thead>
              <tbody>
                {data?.tracks.items.map((tracksItem: ItemById) => (
                  <tr key={tracksItem.track.id}>
                    <td className="pr-4">{tracksItem.track.name}</td>
                    <td className="text-right md:text-center py-2">
                      {tracksItem.track.album.name}
                    </td>
                    <td className="text-center hidden md:block">
                      {convertTime(tracksItem.track.duration_ms)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistDetails;
