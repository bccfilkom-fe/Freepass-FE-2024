import SkeletonList from "@components/loading/SkeletonList";
import { Album } from "@models/album/Album";
import { getArtistAlbum } from "@services/api/artist/getArtistAlbum";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { useParams } from "react-router-dom";

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getArtistAlbum({ url: `artists/${id}`, token });
    },
    queryKey: ["artistdetail"],
  });
  console.log(data);
  return (
    <div>
      <div className="p-20 flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-end gap-6">
          <img
            src={
              data && data[0].images.length && data[0].images.length > 0
                ? data[0].images[0].url
                : "https://placehold.jp/400x400.png"
            }
            alt=""
            className="max-w-96 max-h-96"
          />
          <h1 className="justify-end">
            {(data && data[0].artists[0].name) ?? ""}
          </h1>
        </div>

        {isLoading ? (
          <SkeletonList />
        ) : (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left pr-4">Album</th>
                <th className="md:text-center">Artists</th>
                <th className="text-center hidden md:block">Total Song</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((albumItem: Album) => (
                <tr key={albumItem.id}>
                  <td className="pr-4">{albumItem.name}</td>
                  <td className="text-right md:text-center py-2">
                    {albumItem.artists.map((artist) => artist.name).join(", ")}
                  </td>
                  <td className="text-center hidden md:block">
                    {albumItem.total_tracks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ArtistDetail;
