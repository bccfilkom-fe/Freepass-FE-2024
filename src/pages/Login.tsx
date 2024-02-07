import LoginCard from "@components/LoginCard";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "@services/api/env";

import spotify from "@assets/spotify-logo.png";

const Login = () => {
  const authEndPoint = AUTH_ENDPOINT;
  const clientId = CLIENT_ID;
  const redirectUri = REDIRECT_URI;
  const responseType = RESPONSE_TYPE;

  return (
    <section className="h-screen flex flex-col lg:flex-row lg:gap-20 xl:gap-40 2xl:gap-64 justify-center items-center gap-12">
      <div className="flex flex-col gap-8 text-center">
        <h1>Welcome To Musix</h1>
        <p className="max-w-md">
          🎵 Listen to millions of your favorite songs, albums, and playlists
          anytime, anywhere with Musix, your preferred music app. Enjoy an
          unparalleled listening experience with an extensive and diverse music
          catalog.
        </p>
      </div>
      <LoginCard
        authEndPoint={authEndPoint}
        clientId={clientId}
        redirectUri={redirectUri}
        responseType={responseType}
        img={spotify}
      />
    </section>
  );
};

export default Login;
