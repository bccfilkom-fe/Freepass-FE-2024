import SkeletonCardDetail from "@components/loading/SkeletonCardDetail";
import { getUserResponse } from "@services/api/user/GetUserResponse";
import { useQuery } from "@tanstack/react-query";
import { wait } from "@utils/Wait";

export default function Profile() {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await wait(2000);
      const token = window.localStorage.getItem("token");
      return getUserResponse({ url: "me", token });
    },
    queryKey: ["profile"],
  });

  return (
    <section className="container my-20 flex justify-center h-screen">
      {isLoading ? (
        <SkeletonCardDetail />
      ) : (
        <div className="shadow-lg px-32 flex flex-col py-12 items-start gap-12">
          <h1 className="text-center">Your Profile</h1>
          <div className=" flex gap-4 flex-col">
            <h4>Username: {data?.display_name ?? ""}</h4>
            <h4>Followers: {data?.followers.total ?? 0}</h4>
          </div>
        </div>
      )}
    </section>
  );
}
