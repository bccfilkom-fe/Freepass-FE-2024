import PrimaryButton from "../button/PrimaryButton"
import nextArrow from "../../assets/icon/NextArrow.svg"
import prevArrow from "../../assets/icon/PrevArrow.svg"
import iconPlay from "../../assets/icon/Play.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { formatDate } from "../../helper/Helper"
import CircularPercentageWithLabel from "../feedback/CircularPercentageWithLabel"
import Loading from "../feedback/Loading"
import Trailer from "../play/Trailer"
import ErrorMessage from "../feedback/ErrorMessage"
import { useTheme } from "../../theme/ThemeProvider"

const TrendingSlider = () => {
  const token = import.meta.env.VITE_TMDB_API_RAT

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isPlayTrailer, setIsPlayTrailer] = useState(false)
  const [selectedID, setSelectedID] = useState(null)
  const {theme} = useTheme()

  const getData = async () => {
    setIsLoading(true)
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day?language=id-ID", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.results.slice(0, 10)
        setData(data)
        console.log(data)
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 3500,
    speed: 750,
    nextArrow: <img src={nextArrow} />,
    prevArrow: <img src={prevArrow} />,
  }

  return (
    <div
      className="flex flex-row w-full h-fit lg:gap-5 lg:py-2 sm:gap-5 sm:py-2 gap-5 py-2 justify-center"
    >
      {errorMessage ? (
        <div className="w-full h-full">
          <ErrorMessage message={errorMessage} />
        </div>
      ) : (
        <>
          {isPlayTrailer && <Trailer handleClose={setIsPlayTrailer} id={selectedID} />}
      <div className="lg:w-1085 lg:h-550 sm:w-full sm:h-550 w-full h-64 shadow-spread">
        {isLoading ? (
          <Loading />
        ) : (
          <Slider {...settings}>
            {data.map((item, index) => (
              <Link key={index} to={`/movie/detail/${item.id}`}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                  }}
                  className="lg:w-1085 lg:h-550 sm:w-full sm:h-550 h-64 bg-cover bg-center hover:animate-scale-110"
                >
                  <div className={`flex flex-row w-full h-full ${theme == 'dark' ? 'bg-linear-top-black-1' : 'bg-linear-top-black-0.5'} lg:gap-9 lg:px-12 lg:py-10 sm:gap-9 sm:px-14 sm:py-10 gap-5 px-7 py-5 items-end`}>
                    <div
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
                      }}
                      className="lg:w-200 lg:h-300 sm:w-200 sm:h-300 w-100 h-150 bg-cover bg-center shadow-spread flex-shrink-0"
                    />
                    <div className="flex flex-col w-full lg:py-3.5 lg:gap-9 sm:py-3.5 sm:gap-9 py-2 gap-3 ">
                      <div className="flex flex-col w-full lg:gap-2.5 sm:gap-2 gap-1.5 text-white-1 drop-shadow-2xl">
                        <h1
                          style={{ lineHeight: "1.2" }}
                          className="font-bold"
                        >
                          {item.title}
                          {item.title !== item.original_title &&
                            ` (${item.original_title})`}
                        </h1>
                        <h4
                          style={{ lineHeight: "1.1" }}
                          className="font-semibold"
                        >
                          {formatDate(item.release_date)}
                        </h4>
                        <p className="font-normal h-10 sm:h-fit overflow-hidden">{item.overview}</p>
                        <div className="flex flex-row gap-3 items-center">
                          <CircularPercentageWithLabel
                            value={item.vote_average * 10}
                            isThemeChange={false}
                          />
                          <h7>{item.vote_count} votes</h7>
                        </div>
                      </div>

                      <PrimaryButton
                        name="Trailer"
                        width={"fit"}
                        icon={iconPlay}
                        handle={() => {
                          setIsPlayTrailer(!isPlayTrailer)
                          setSelectedID(item.id)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        )}
      </div>
        </>
      )}
    </div>
  )
}

export default TrendingSlider
