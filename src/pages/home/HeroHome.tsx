import listeningImage from "@assets/listening.png";
const HeroHome = () => {
  return (
    <section className="container">
      <div className="flex flex-col-reverse gap-6 lg:gap-16 lg:flex-row justify-between items-center">
        <h1 className="text-center lg:text-start">
          Listen Your Favorite Song In this Website from Spotify
        </h1>
        <img src={listeningImage} alt="" className="h-64 w-64 lg:w-full lg:h-full" />
      </div>
    </section>
  );
};

export default HeroHome;
