import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AutoScrollHard from "../helper/Helper";
import DetailMovie from "../pages/movie/DetailMovie";
import SearchPage from "../pages/movie/SearchPage";
import Movies from "../pages/movie/Movies";

const MainRoute = () => {
  return (
    <>
      <AutoScrollHard x={0} y={0} />

      <Routes>
        {/* general */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/detail/:id" element={<DetailMovie />} />
        <Route path="/movie/:category" element={<Movies />} />
        <Route path="/movie/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default MainRoute;
