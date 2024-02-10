import Card from "@components/Card";
import GridContainer from "@components/GridContainer";
import SkeletonCard from "@components/loading/SkeletonCard";
import { Track } from "@models/track/Track";
import { getRecommendationTrack } from "@services/api/track/getRecomendation";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";

const AllRecommendation = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(3000);
      const token = window.localStorage.getItem("token");
      return getRecommendationTrack({ url: "recommendations", token });
    },
    queryKey: ["recom"],
  });
  console.log(data);

  return (
    <section className="container py-20">
      <h1>Recommended Song</h1>
      <GridContainer>
        {isLoading
          ? Array.from({ length: 8 }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.tracks.map((trackItem: Track) => (
              <Card
                type="music"
                key={trackItem.id}
                id={trackItem.id}
                image={trackItem.album.images[0].url}
                name={trackItem.name}
              />
            ))}
      </GridContainer>
    </section>
  );
};

export default AllRecommendation;
