import { getUserResponse } from "@services/api/user/GetUserResponse";
import { useQuery } from "@tanstack/react-query";

export default function Profile() {
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const { data } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserResponse({ url: "me", token });
    },
    queryKey: [window.localStorage.getItem("token")],
  });
  console.log(data);
  

  return (
    <section className="container mt-20 flex justify-center">
      <div className="shadow-lg px-32 flex flex-col py-12 items-start gap-12">
        <h1 className="text-center">Your Profile</h1>
        <div className=" flex gap-4 flex-col">
          <h4>Username: {data?.display_name}</h4>
          <h4>Followers: {data?.followers.total}</h4>
        </div>
      </div>
    </section>
  );
}
