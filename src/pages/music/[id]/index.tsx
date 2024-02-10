import Button from "@components/Button";
import SkeletonCardDetail from "@components/loading/SkeletonCardDetail";
import { getTrack } from "@services/api/track/getTrack";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { useParams } from "react-router-dom";

const TrackDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getTrack({ url: `tracks/${id}`, token });
    },
    queryKey: [id],
  });
  console.log(data);

  return (
    <>
      {isLoading ? (
        <SkeletonCardDetail />
      ) : (
        <div className="shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 p-20 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={data?.album.images[0].url}
                alt=""
                className="w-96 h-96"
              />
              <div className="flex flex-col justify-end gap-2">
                <h1 className="mb-6">{data?.name}</h1>
                <div className="flex flex-col gap-3">
                  <span>
                    Artists:
                    {data?.artists.map((artist) => artist.name).join(", ")}
                  </span>
                  <span>
                    Album:
                    {data?.album.name}
                  </span>
                </div>
              </div>
            </div>

            <Button variant="default">
              <a href={data?.uri} target="_blank" rel="noopener noreferrer">
                Play on Spotify
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TrackDetails;
