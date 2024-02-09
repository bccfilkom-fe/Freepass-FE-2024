import Button from "@components/Button";
import Card from "@components/Card";
import FormModal from "@components/FormPlaylistModal";
import GridContainer from "@components/GridContainer";
import SkeletonCard from "@components/loading/SkeletonCard";
import { Item } from "@models/playlist/Item";
import { getUserPlaylist } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";

export default function Playlist() {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserPlaylist({ url: "me/playlists", token });
    },
    queryKey: ["userPlaylist"],
  });
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className="container flex flex-col gap-16 py-10">
      <div className="flex justify-between">
        <h1 className="h3 lg:h1">Your Playlist</h1>
        <Button variant="default" onClick={toggleModal}>
          Create New Playlist
          <PiPlus size={25} />
        </Button>
      </div>

      <GridContainer>
        {isLoading
          ? Array.from({ length: 4 }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.map((playlistItem: Item) => (
              <Card
                type="playlist"
                key={playlistItem.id}
                id={playlistItem.id}
                image={
                  playlistItem?.images?.length && playlistItem.images.length > 0
                    ? playlistItem.images[0].url
                    : "https://placehold.jp/400x400.png"
                }
                name={playlistItem.name}
              />
            ))}
      </GridContainer>
      {isModalOpen && (
        <FormModal
          type="post"
          text="Create New Playlist"
          onClose={toggleModal}
          id={window.localStorage.getItem("userId") ?? ""}
        />
      )}
    </section>
  );
}
