import { getUserResponse } from "@services/api/user/GetUserResponse";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";

export default function Profile() {
  

  const { data } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserResponse({ url: "me", token });
    },
    queryKey: [window.localStorage.getItem("token")],
  });
  

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
