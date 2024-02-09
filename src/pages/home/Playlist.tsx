import Button from "@components/Button";
import Card from "@components/Card";
import GridContainer from "@components/GridContainer";
import SkeletonCard from "@components/loading/SkeletonCard";
import { Item } from "@models/playlist/Item";
import { getUserPlaylist } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { Link } from "react-router-dom";

const Playlist = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(3000);
      const token = window.localStorage.getItem("token");
      return getUserPlaylist({ url: "me/playlists?limit=4", token });
    },
    queryKey: [window.localStorage.getItem("token")],
  });
  return (
    <section className="container flex flex-col gap-16">
      <div className="flex justify-between">
        <h1 className="h3 lg:h1">Your Playlist</h1>
        <Button variant="disabled">
          <Link to="/playlist">Manage & See All</Link>
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
    </section>
  );
};

export default Playlist;
