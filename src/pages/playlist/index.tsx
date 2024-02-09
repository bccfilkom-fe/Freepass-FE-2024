import Card from "@components/Card";
import GridContainer from "@components/GridContainer";
import { Item } from "@models/playlist/Item";
import { getUserPlaylist } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";

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
  return (
    <section className="container flex flex-col gap-16 py-10">
      <div className="flex justify-between">
        <h1 className="h3 lg:h1">Your Playlist</h1>
      </div>

      <GridContainer>
        {isLoading ? (
          <div>isLoading</div>
        ) : (
          data?.map((playlistItem: Item) => (
            <Card
              type="playlist"
              key={playlistItem.id}
              id={playlistItem.id}
              image={playlistItem.images[0].url}
              name={playlistItem.name}
            />
          ))
        )}
      </GridContainer>
    </section>
  );
}
