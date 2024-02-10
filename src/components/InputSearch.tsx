import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "@services/api/getSearchResult";
import { wait } from "@utils/Wait";
import SkeletonResultList from "./loading/SkeletonResultList";
import { SearchResultItem } from "@models/search/SearchResultItem";
import ListCard from "./ListCard";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { SearchResult } from "@models/search/SearchResult";
import { useOnClickOutside } from "@hooks/UseOnClickOutside";

interface InputSearchProps {
  type?: string;
  queryKey?: string;
}

const InputSearch: React.FC<InputSearchProps> = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const searchRef = useRef<HTMLInputElement>(null);
  const searchResultRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isLoading, refetch } = useQuery({
    queryFn: async () => {
      const searchValue = searchRef.current!.value;
      if (searchValue) {
        await wait(1000);
        const token = window.localStorage.getItem("token");
        return getSearchResult({
          q: `${searchValue ?? ""}&type=album%2Cartist%2Ctrack&limit=8`,
          token,
        });
      }
    },
    queryKey: ["search"],
    enabled: false,
  });
  useEffect(() => {
    if (data) {
      setSearchResult(data);
    }
  }, [data]);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const handleOnChange = () => {
    const searchValue = searchRef.current?.value;
    if (searchValue !== "") {
      refetch();
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleSearchIcon = async () => {
    const searchValue = searchRef.current?.value;
    if (searchValue) {
      setIsOpen(true);
    }
  };

  const handleClearIcon = () => {
    searchRef.current && (searchRef.current.value = "");
    setIsOpen(false);
    setSearchResult(undefined);
  };

  useOnClickOutside(searchResultRef, () => {
    setIsOpen(false);
  });
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchValue = searchRef.current?.value;
      if (searchValue) {
        window.location.href = `/search/${searchValue}`;
      }
    }
  };

  return (
    <div>
      <div className="flex items-center flex-col border-2 rounded-lg">
        <div className="flex flex-col rounded-sm px-2 items-center justify-center">
          <div>
            <input
              className="text-center px-4 py-2"
              type="text"
              placeholder="Search Here"
              ref={searchRef}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
            <button className="py-1 px-2">
              {isOpen ? (
                <RxCross2 onClick={handleClearIcon} />
              ) : (
                <BiSearch onClick={handleSearchIcon} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex flex-col bg-white" : "hidden"
        } w-full p-12 absolute left-0 right-0  justify-center`}
        ref={searchResultRef}
      >
        {isLoading
          ? Array.from({ length: 5 }, (_, index) => (
              <SkeletonResultList key={index} />
            ))
          : searchResult?.tracks?.items
              .slice(0, 5)
              .map((resultData: SearchResultItem) => (
                <ListCard
                  key={resultData.id}
                  image={
                    resultData.album.images?.length &&
                    resultData.album.images.length > 0
                      ? resultData.album.images[0].url
                      : "https://placehold.jp/400x400.png"
                  }
                  title={resultData.name}
                  desc={resultData.artists[0].name}
                  link={`music/${resultData.id}`}
                />
              ))}
      </div>
      <div>
        {isOpen && (searchResult?.tracks.items.length ?? 0) > 0 ? (
          <Button className="border-white">
            <Link to={`search/${searchRef.current?.value}`}>
              View All Results
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default InputSearch;
