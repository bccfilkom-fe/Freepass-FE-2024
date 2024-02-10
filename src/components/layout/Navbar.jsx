import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-2.svg";
import logoDark from "../../assets/logo/logo-2-black.svg";
import MenuButton from "../button/MenuButton";
import ThemeToggleButton from "../button/ThemeToggleButton";
import SearchBar from "../search/SearchBar";
import { useTheme } from "../../theme/ThemeProvider";
import DataMenu from "../../data/DataMenu";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (
        window.scrollY > navbar.offsetHeight &&
        lastScrollY < window.scrollY
      ) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <navbar className="w-full flex justify-center items-center">
      <div
        className={`${
          isHidden ? "-translate-y-7/5" : ""
        } navbar flex flex-col w-full lg:w-10/12 sm:w-full lg:h-fit top-0 lg:top-5 sm:top-0 fixed transition-all duration-500 z-40`}
      >
        <div
          className={`${
            theme === "dark" ? "bg-black-0.85" : "bg-white-0.85"
          } flex flex-row w-full lg:px-9 sm:px-6 px-3 lg:py-5 sm:py-2.5 py-2.5 ${
            menuOpen ? "lg:rounded-b-none" : "lg:rounded-b-15"
          } lg:rounded-t-15 border-b-3 border-red justify-between items-center transition-all duration-500 z-100 lg:h-fit sm:h-16 h-fit`}
        >
          <Link
            to={"/"}
            className="hover:scale-105 transition-transform duration-200"
          >
            <img
              src={theme == "dark" ? logo : logoDark}
              alt="home"
              className="lg:h-10 sm:h-10 h-6"
            />
          </Link>

          <div className="m">
            <SearchBar />
          </div>

          <div className="flex flex-row-reverse gap-5 justify-center items-center">
            <MenuButton handle={handleButtonClick} isOpen={menuOpen} />
            <ThemeToggleButton
              currentTheme={theme}
              handleThemeChange={handleThemeChange}
            />
          </div>
        </div>

        {menuOpen && (
          <div
            className={`${
              theme === "dark"
                ? "bg-black-0.85 text-soft-white"
                : "bg-white-0.85 text-black-1"
            } lg:h-24 sm:h-16 h-fit w-full lg:w-full justify-around items-center lg:rounded-b-15 flex sm:flex-row flex-col transition-all duration-300 z-50 animate-navbar-hide py-2 sm:py-0`}
          >
            {DataMenu.map((item, index) => (
              <Link to={item.path} className="hover:text-red py-3 sm:py-0" key={index}>
                <h5>{item.name}</h5>
              </Link>
            ))}
          </div>
        )}
      </div>
    </navbar>
  );
};

export default Navbar;
