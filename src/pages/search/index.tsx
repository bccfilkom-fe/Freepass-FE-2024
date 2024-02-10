import Card from "@components/Card";
import GridContainer from "@components/GridContainer";
import SkeletonCard from "@components/loading/SkeletonCard";
import { Album } from "@models/album/Album";
import { Artist } from "@models/artist/Artist";
import { SearchResultItem } from "@models/search/SearchResultItem";
import { getSearchResult } from "@services/api/getSearchResult";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";
import { useParams } from "react-router-dom";

const SearchResultPage = () => {
  const { keyword } = useParams<{ keyword: string }>();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getSearchResult({
        q: `${keyword}&type=album%2Cartist%2Ctrack&limit=8`,
        token,
      });
    },
    queryKey: ["search"],
  });
  console.log(data);

  return (
    <section className="py-20">
      <h1>Search Result:</h1>
      <div className="flex flex-col gap-10 mt-10">
        <div>
          <h1>Song</h1>
          <GridContainer>
            {isLoading
              ? Array.from({ length: 8 }, (_, index) => (
                  <SkeletonCard key={index} />
                ))
              : data?.tracks.items.map((trackItem: SearchResultItem) => (
                  <Card
                    type="music"
                    key={trackItem.id}
                    id={trackItem.id}
                    image={
                      trackItem?.album.images?.length &&
                      trackItem.album.images.length > 0
                        ? trackItem.album.images[0].url
                        : "https://placehold.jp/400x400.png"
                    }
                    name={trackItem.name}
                  />
                ))}
          </GridContainer>
        </div>
        <div>
          <h1>Artist</h1>
          <GridContainer>
            {isLoading
              ? Array.from({ length: 8 }, (_, index) => (
                  <SkeletonCard key={index} />
                ))
              : data?.artists.items.map((artistItem: Artist) => (
                  <Card
                    type="artist"
                    key={artistItem.id}
                    id={artistItem.id}
                    image={
                      artistItem?.images?.length && artistItem.images.length > 0
                        ? artistItem.images[0].url
                        : "https://placehold.jp/400x400.png"
                    }
                    name={artistItem.name}
                  />
                ))}
          </GridContainer>
        </div>
        <div>
          <h1>Album</h1>
          <GridContainer>
            {isLoading
              ? Array.from({ length: 8 }, (_, index) => (
                  <SkeletonCard key={index} />
                ))
              : data?.albums.items.map((albumItem: Album) => (
                  <Card
                    type="artist"
                    key={albumItem.id}
                    id={albumItem.id}
                    image={
                      albumItem?.images?.length && albumItem.images.length > 0
                        ? albumItem.images[0].url
                        : "https://placehold.jp/400x400.png"
                    }
                    name={albumItem.name}
                  />
                ))}
          </GridContainer>
        </div>
      </div>
    </section>
  );
};

export default SearchResultPage;
