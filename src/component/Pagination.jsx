const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-dark text-xlg">
      <button
        className="transition-all hover:text-color-accent"
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <p className="text-md flex flex-row gap-4 text-xl">
        <span className="font-bold">{page}</span> of
        <span className="font-bold">{lastPage}</span>
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
        disabled={page === lastPage}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
export default Pagination;
