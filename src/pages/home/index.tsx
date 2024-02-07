import HeroHome from "./HeroHome";
import Playlist from "./Playlist";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <HeroHome />
      <Playlist />
    </main>
  );
}
