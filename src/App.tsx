import { AuthProvider } from "@hooks/UseAuth";
import Layout from "@pages/Layout";
import Artist from "@pages/artist";
import Home from "@pages/home";
import Music from "@pages/music";
import TrackDetails from "@pages/music/[id]";
import Playlist from "@pages/playlist";
import PlaylistDetails from "@pages/playlist/[id]";
import Profile from "@pages/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playlist/:id" element={<PlaylistDetails />} />
            <Route path="/music" element={<Music />} />
            <Route path="/music/:id" element={<TrackDetails />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;