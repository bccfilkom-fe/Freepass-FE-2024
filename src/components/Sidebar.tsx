import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "./Button";
import { RxPerson } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ logout }: { logout: () => void }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const isActive = (path: any) => {
    return location.pathname === path;
  };

  const handleSidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="relative top-2 left-0 shadow-2xl px-6 h-screen">
      <FaBars size={30} onClick={handleSidebarOpen} className="" />
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center justify-between py-10 px-6 gap-8`}
      >
        <RxPerson
          size={40}
          className="rounded-full border-[1px] border-black"
        />

        <div className="flex flex-col gap-4 mb-32 text-center">
          <Link
            to="/"
            className={`hover:scale-105 hover:text-primaryGray ${
              isActive("/") ? "text-primaryBlue" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`hover:scale-105 hover:text-primaryGray ${
              isActive("/profile") ? "text-primaryBlue" : ""
            }`}
          >
            Profile
          </Link>
          <Link
            to="/playlist"
            className={`hover:scale-105 hover:text-primaryGray ${
              isActive("/playlist") ? "text-primaryBlue" : ""
            }`}
          >
            Playlist
          </Link>
          <Link
            to="/artist"
            className={`hover:scale-105 hover:text-primaryGray ${
              isActive("/artist") ? "text-primaryBlue" : ""
            }`}
          >
            Artist
          </Link>
          <Link
            to="/music"
            className={`hover:scale-105 hover:text-primaryGray ${
              isActive("/music") ? "text-primaryBlue" : ""
            }`}
          >
            Music
          </Link>
        </div>
        <Button size="small" variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
