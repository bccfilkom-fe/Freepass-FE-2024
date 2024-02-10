import ListMovie from "../../components/list-movie/ListMovie"
import TrendingSlider from "../../components/list-movie/TrendingSlider"
import Footer from "../../components/layout/Footer"
import Navbar from "../../components/layout/Navbar"
import { useTheme } from "../../theme/ThemeProvider"

const Home = () => {
  const {theme} = useTheme()

  return (
    <div className="flex-col w-full">
      <Navbar />

      <div className="w-full h-fit lg:h-banner-lg sm:h-fit bg-center bg-cover bg-banner-home lg:border-b-4 sm:border-b-4 border-red overflow-hidden">
        <div className={`w-full h-full ${theme == 'dark' ? 'bg-linear-top-black-0.75' : 'bg-linear-top-white-0.25'} lg:px-50 lg:py-120 sm:px-0 sm:pt-14 sm:pb-5 px-0 pt-9 pb-5`}>
          <TrendingSlider />
        </div>
      </div>

      <div className={`flex flex-col w-full bg-center bg-cover ${theme == 'dark' ? 'bg-black-1' : 'bg-white-1'} gap-8 lg:pt-20 lg:pb-20 lg:px-24 sm:pt-10 sm:pb-10 sm:px-14 pt-5 pb-5 px-7 transition-all duration-500`}>
        <ListMovie title={"Now Playing"} urlMovies={'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'} path={'/movie/now-playing'}/>
        <ListMovie title={"Top Rated"} urlMovies={'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'} path={'/movie/top-rated'}/>
        <ListMovie title={"Popular"} urlMovies={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'} path={'/movie/popular'}/>
        <ListMovie title={"Upcoming"} urlMovies={'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'} path={'/movie/upcoming'}/>
      </div>

      <Footer />
    </div>
  )
}

export default Home
