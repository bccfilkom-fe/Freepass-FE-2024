import HeroHome from "./HeroHome";
import Playlist from "./Playlist";
import Recommendation from "./Recommendation";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <HeroHome />
      <Playlist />
      <Recommendation />
    </main>
  );
}
