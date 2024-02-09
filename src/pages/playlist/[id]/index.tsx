import Button from "@components/Button";
import FormModal from "@components/FormModal";
import SkeletonCardDetail from "@components/loading/SkeletonCardDetail";
import SkeletonList from "@components/loading/SkeletonList";
import { ItemById } from "@models/playlist/Item";
import { getUserPlaylistById } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { convertTime } from "@utils/convertTime";
import { useState } from "react";
import { PiPencil } from "react-icons/pi";
import { TbTrash } from "react-icons/tb";
import { useParams } from "react-router-dom";

const PlaylistDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, refetch } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserPlaylistById({ url: `playlists/${id}`, token });
    },
    queryKey: ["playlistDetail"],
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen === false) {
      refetch();
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-4">
          <SkeletonCardDetail />
          <SkeletonList />
        </div>
      ) : (
        <div className="shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 p-20 justify-between">
            <div className="flex flex-col md:flex-row gap-4">
              <img src={data?.images[0].url} alt="" className="w-96 h-96" />
              <div className="flex flex-col justify-end gap-2">
                <h1>{data?.name}</h1>
                <span>Owned By: {data?.owner.display_name}</span>
                <p>{data?.tracks.total} song</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <Button className="flex gap-3 items-center" onClick={toggleModal}>
                Edit
                <PiPencil size={20} />
              </Button>
              <Button
                variant="default"
                className="flex gap-3 items-center"
                onClick={toggleModal}
              >
                Delete
                <TbTrash size={20} />
              </Button>
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
      {isModalOpen && (
        <FormModal
          text="Are You Sure Want to Edit This Playlist?"
          onClose={toggleModal}
          id={data?.id ?? ""}
        />
      )}
    </>
  );
};

export default PlaylistDetails;
