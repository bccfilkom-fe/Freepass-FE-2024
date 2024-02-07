import Button from "./Button";

const LoginCard = ({
  authEndPoint,
  clientId,
  redirectUri,
  responseType,
  img,
}: {
  authEndPoint: string;
  clientId: string;
  redirectUri: string;
  responseType: string;
  img?: string;
}) => {
  return (
    <div className="py-28 px-10 gap-20 text-center shadow-xl rounded-md max-w-96 flex flex-col justify-center">
      <h3>Login With Your Spotify Account</h3>
      <Button variant="ghost" className="flex items-center">
        <img src={img} alt="" className="w-10 h-10" />
        <a
          href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}
        >
          Login With Spotify Account
        </a>
      </Button>
    </div>
  );
};

export default LoginCard;
