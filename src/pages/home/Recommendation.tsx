import Button from "@components/Button";
import Card from "@components/Card";
import GridContainer from "@components/GridContainer";
import SkeletonCard from "@components/loading/SkeletonCard";
import { Track } from "@models/track/Track";
import { get8RecommendationTrack } from "@services/api/track/getRecomendation";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";

const Recommendation = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(6000);
      const token = window.localStorage.getItem("token");
      return get8RecommendationTrack({ url: "recommendations", token });
    },
    queryKey: ["recom"],
  });

  return (
    <section className="container">
      <div className="flex justify-between">
        <h1>Recommended Song</h1>
        <Button variant="disabled">See All</Button>
      </div>
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

export default Recommendation;
