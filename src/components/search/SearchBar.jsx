import { useState } from "react";
import searchIcon from '../../assets/icon/Search.svg';
import { useTheme } from "../../theme/ThemeProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const { theme } = useTheme();
  const location = useLocation()
  const key = new URLSearchParams(location.search).get("key")
  const nav = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    nav(`/movie/search?key=${searchKey}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex flex-row sm:rounded-10 rounded-md lg:px-2.5 sm:px-2.5 px-1.5 sm:gap-1.5 gap-1 overflow-hidden transition-all ${theme === 'dark' ? 'bg-soft-white' : 'bg-white-0.5'} lg:w-400 sm:w-300 w-150 lg:h-10 sm:h-9 h-6 border-gray border`}
    >
      <button
        type="submit"
        className="flex justify-center lg:w-7 sm:w-6 w-4 h-full cursor-pointer items-center focus:outline-none border-none hover:border-none"
      >
        <img src={searchIcon} alt="Search icon" />
      </button>
      <div className="flex w-full h-full items-center">
        <input
          type="text"
          id="key"
          placeholder={key ? key : "Search movie"}
          className="focus:outline-none w-full bg-transparent lg:text-sm sm:text-sm text-xs text-gray placeholder:text-gray"
          autoComplete="off"
          required
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
