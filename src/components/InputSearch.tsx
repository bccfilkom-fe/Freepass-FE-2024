import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

interface InputSearchProps {
  type?: string;
  queryKey?: string;
}

const InputSearch: React.FC<InputSearchProps> = () => {
  // const [searchResult, setSearchResult] = useState<[]>();
  const searchRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOnChange = () => {
    const searchValue = searchRef.current?.value;
    if (searchValue !== "") {
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
    // setSearchResult(undefined);
  };
  return (
    <div className="flex items-center flex-col border-2 rounded-lg">
      <div className="flex flex-col rounded-sm px-2 items-center justify-center">
        <div>
          <input
            className="text-center px-4 py-2"
            type="text"
            placeholder="Search Here"
            ref={searchRef}
            onChange={handleOnChange}
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
  );
};

export default InputSearch;
