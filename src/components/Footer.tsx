import { Link } from "react-router-dom";
import logo from "@assets/icons/musix-logo.png";

const Footer = () => {
  return (
    <section className="w-full bg-darkBlue ">
      <div className="container text-white flex flex-col md:flex-row justify-center gap-x-96 gap-y-16 p-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-10 h-10" />
            <h4>Musix</h4>
          </div>
          <p className="max-w-[420px]">
            The Musix website is a website that is integrated with the Spotify
            API
            <br />
            <a
              className="underline"
              href="https://myanimelist.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.spotify.com/documentation/web-api
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="font-bold">Navigation</span>
          <div className="flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/music">Music</Link>
            <Link to="/playlist">Playlist</Link>
            <Link to="/artist">Artist</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
