import Layout from "@pages/Layout";
import Artist from "@pages/artist";
import Home from "@pages/home";
import Music from "@pages/music";
import Playlist from "@pages/playlist";
import Profile from "@pages/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/music" element={<Music />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
