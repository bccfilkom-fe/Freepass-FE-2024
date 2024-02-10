import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ListBookPage from "./pages/ListBookPage";
import Anime from "./pages/Anime";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Movie" Component={MoviePage} />
        <Route path="/ListBook" Component={ListBookPage} />
        <Route path="/Anime" Component={Anime} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
