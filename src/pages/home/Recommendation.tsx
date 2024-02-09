import Card from "@components/Card";
import GridContainer from "@components/GridContainer";
import { Track } from "@models/track/Track";
import { get8RecommendationTrack } from "@services/api/track/getRecomendation";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";

const Recommendation = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return get8RecommendationTrack({ url: "recommendations", token });
    },
    queryKey: ["recom"],
  });
  console.log(data);

  return (
    <section className="container">
      <h1>Recommended Song</h1>
      <GridContainer>
        {isLoading ? (
          <div>isLoading</div>
        ) : (
          data?.tracks.map((trackItem: Track) => (
            <Card
              type="music"
              key={trackItem.id}
              id={trackItem.id}
              image={trackItem.album.images[0].url}
              name={trackItem.name}
            />
          ))
        )}
      </GridContainer>
    </section>
  );
};

export default Recommendation;
