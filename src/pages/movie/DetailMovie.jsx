import { useEffect, useState } from "react"
import Navbar from "../../components/layout/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loading from "../../components/feedback/Loading"
import { formatDate } from "../../helper/Helper"
import Trailer from "../../components/play/Trailer"
import CircularWithValueLabel from "../../components/feedback/CircularPercentageWithLabel"
import TransparentButton from "../../components/button/TransparentButton"
import iconPlay from "../../assets/icon/Play.svg"
import ErrorMessage from "../../components/feedback/ErrorMessage"
import { useTheme } from "../../theme/ThemeProvider"
import Footer from "../../components/layout/Footer"

const DetailMovie = () => {
  const { id } = useParams()

  const [data, setData] = useState({})
  const [movieProviders, setMovieProviders] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()
  const [errorMessage, setErrorMessage] = useState("")
  const [isPlayTrailer, setIsPlayTrailer] = useState(false)
  const token = import.meta.env.VITE_TMDB_API_RAT
  const api_key = import.meta.env.VITE_TMDB_APIKEY

  const getData = async () => {
    setIsLoading(true)
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data
        setData(data)
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const getMovieProviders = async () => {
    setIsLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api_key}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const data = res.data
        setMovieProviders(data.results)
        // console.log("Provides", data)
      })
      .catch((err) => {
        // console.log("error", err)
        setErrorMessage(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleWatchNowClick = () => {
    const targetElement = document.getElementById("movie-play")

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    getData()
    getMovieProviders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, token])

  return (
    <div
      className={`flex-col w-full min-h-screen overflow-hidden ${
        theme == "dark" ? "bg-black-1" : "bg-white-1"
      }`}
    >
      <Navbar />

      {isPlayTrailer && <Trailer handleClose={setIsPlayTrailer} id={data.id} />}

      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
        className="w-full lg:h-banner-lg sm:h-banner-lg h-fit bg-cover lg:border-b-4 sm:border-b-4 border-b-2 border-red"
      >
        {isLoading ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMessage message={errorMessage} />
        ) : (
          <div
            className={`w-full h-full flex flex-col ${
              theme == "dark"
                ? "bg-linear-top-black-0.9"
                : "bg-linear-top-black-0.5"
            } lg:px-100 lg:pt-120 sm:px-14 sm:pt-120 px-7 pt-10 pb-3 sm:pb-0`}
          >
            <div className="flex flex-col w-full h-fit lg:py-6 lg:px-10 sm:py-6 sm:px-10 py-0 px-2 justify-center">
              <div className="flex flex-row lg:w-full lg:h-520 lg:gap-9 lg:py-8 sm:w-full sm:h-520 sm:gap-9 sm:py-8 w-full h-fit gap-3 py-4 lg:items-end sm:items-center items-end">
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                  }}
                  className="lg:w-300 lg:h-450 sm:w-250 sm:h-375 w-100 h-150 bg-cover bg-center flex-shrink-0 shadow-spread"
                />

                <div className="flex flex-col w-full lg:py-4 lg:gap-7 sm:py-4 sm:gap-7 py-2 gap-2">
                  <div className="flex flex-col w-full lg:gap-2.5 sm:gap-2.5 gap-1.5 text-white-1 drop-shadow-2xl">
                    <h1 style={{ lineHeight: "1.2" }} className="font-bold">
                      {data.title}
                      {data.title !== data.original_title &&
                        ` (${data.original_title})`}
                    </h1>
                    <h4 style={{ lineHeight: "1.1" }} className="font-semibold">
                      {formatDate(data.release_date)}
                    </h4>
                    <p className="font-normal">{data.overview}</p>
                    <div className="flex flex-row gap-3 items-center">
                      <CircularWithValueLabel
                        value={data.vote_average * 10}
                        isThemeChange={false}
                      />
                      <h7>{data.vote_count} votes</h7>
                    </div>
                  </div>

                  <TransparentButton
                    name="TRAILER"
                    icon={iconPlay}
                    handle={() => {
                      setIsPlayTrailer(!isPlayTrailer)
                    }}
                  />
                </div>
              </div>

              <div className="lg:w-300 sm:w-250 w-100 text-center">
                <button onClick={handleWatchNowClick}>
                  <h6 className="w-fit font-bold text-center text-white-1 hover:brightness-75 transition-all">
                    WATCH NOW
                  </h6>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {errorMessage === "" && (
        <div
          id="movie-play"
          className={`flex flex-col justify-center items- w-full bg-center bg-cover ${
            theme == "dark" ? "bg-black-1" : "bg-white-1"
          } lg:px-24 lg:pt-14 lg:pb-14 sm:px-20 sm:pt-8 sm:pb-16 px-5 pt-2 pb-8`}
        >
          <div
            className={`${
              theme == "dark" ? "text-soft-white" : "text-black-1"
            } mt-4 flex flex-col justify-center lg:gap-5 sm:gap-7 gap-3`}
          >
            {movieProviders && Object.keys(movieProviders).length > 0 ? (
              <>
                <h4>Available on:</h4>
                <div className="flex flex-col lg:gap-5 sm:gap-7 gap-5">
                  {Object.keys(movieProviders).map((item) => (
                    <div key={item} className="flex flex-col lg:gap-3 sm:gap-3 gap-1">
                      <h5>{item}:</h5>
                      <ul className="flex flex-row lg:gap-3 sm:gap-3 gap-1">
                        {movieProviders[item].buy ? movieProviders[item].buy.map((provider) => (
                          <li key={provider.provider_id}>
                            <div className="flex gap-2 items-center lg:text-sm sm:text-xs text-xs">
                              <img
                                src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                                alt={`${provider.provider_name} logo`}
                                className="lg:w-10 lg:h-10 sm:w-9 sm:h-9 w-5 h-5"
                              />
                              {provider.provider_name}
                            </div>
                          </li>
                        )) : movieProviders[item].rent && movieProviders[item].rent.map((provider) => (
                          <li key={provider.provider_id}>
                            <div className="flex gap-2 items-center lg:text-sm sm:text-xs text-xs">
                              <img
                                src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                                alt={`${provider.provider_name} logo`}
                                className="lg:w-10 lg:h-10 sm:w-9 sm:h-9 w-5 h-5"
                              />
                              {provider.provider_name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <h4>Provider not available</h4>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default DetailMovie
