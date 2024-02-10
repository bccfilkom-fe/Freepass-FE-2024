
const FollowedArtist = () => {
  // const { data, isLoading } = useQuery({
  //   queryFn: async () => {
  //     await wait(3000);
  //     const token = window.localStorage.getItem("token");
  //     return getFollowedArtist({ url: "me/following", token });
  //   },
  //   queryKey: ["followedArtist"],
  // });
  // console.log(data);
  return (
    <section className="py-20">
      <h1>Followed Artist</h1>
    </section>
  );
};

export default FollowedArtist;
