import Button from "@components/Button";
import GridContainer from "@components/GridContainer";
import { Item } from "@models/playlist/Item";
import { getUserPlaylist } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { Link } from "react-router-dom";

const Playlist = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserPlaylist({ url: "me/playlists?limit=4", token });
    },
    queryKey: [window.localStorage.getItem("token")],
  });
  console.log(data);
  return (
    <section className="container flex flex-col gap-16">
      <div className="flex justify-between">
        <h1 className="h3 lg:h1">Your Playlist</h1>
        <Button variant="disabled">
          <Link to="/playlist">Manage & See All</Link>
        </Button>
      </div>
      <GridContainer>
        {isLoading ? (
          <div>isLoading</div>
        ) : (
          data?.map((playlistItem: Item) => (
            <div key={playlistItem.id} className="flex flex-col gap-2">
              <img
                src={playlistItem.images[0].url}
                alt=""
                className="w-96 h-96"
              />
              <h3>{playlistItem.name}</h3>
            </div>
          ))
        )}
      </GridContainer>
    </section>
  );
};

export default Playlist;
