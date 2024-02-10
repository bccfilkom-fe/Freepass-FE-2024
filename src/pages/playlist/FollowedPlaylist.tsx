import { getUserPlaylist } from "@services/api/playlist/getPlaylist";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";

const FollowedPlaylist = () => {
  const { data } = useQuery({
    queryFn: async () => {
      await wait(3000);
      const token = window.localStorage.getItem("token");
      return getUserPlaylist({ url: "me/tracks", token });
    },
    queryKey: ["recom"],
  });
  console.log(data);


  return (
    <section>
      <div></div>
    </section>
  );
};

export default FollowedPlaylist;
