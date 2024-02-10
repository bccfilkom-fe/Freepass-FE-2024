import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../feedback/Loading"
import MovieCard from "../card/MovieCard"
import { Link } from "react-router-dom"
import { formatDate } from "../../helper/Helper"
import { useTheme } from "../../theme/ThemeProvider"

// eslint-disable-next-line react/prop-types
const ListMovie = ({ title, urlMovies, path }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const {theme} = useTheme()
  const token = import.meta.env.VITE_TMDB_API_RAT

  const getData = async () => {
    setIsLoading(true)
    axios
      .get(urlMovies, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.results.slice(0, 15)
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

  return (
    <div className="flex flex-col w-full lg:gap-7 sm:gap-5 gap-3">
      <div className="flex flex-row justify-between lg:pr-2">
        <div className={`flex-row flex gap-4 ${theme == 'dark' ? 'text-soft-white' : 'text-black-1'} items-end transition-all duration-500`}>
          <h2>{title}</h2>
        </div>

        <div className="right">
          <Link to={path} className={`hover:brightness-75 ${theme == 'dark' ? 'text-soft-white' : 'text-black-1'} transition-all duration-500`}>
            <h4>see all</h4>
          </Link>
        </div>
      </div>

      <div className={`${isLoading && 'justify-center items-center'} flex flex-row w-full min-h-60 gap-6 lg:overflow-x-auto sm: overflow-x-scroll lg:pb-20 sm:pb-5`}>
        {isLoading ? (
          <Loading />
        ) : 
          errorMessage ? (
            <h5 className={`${theme == 'dark' ? 'text-soft-white' : 'text-black-1'} self-center transition-all duration-500`}>{errorMessage}</h5>
          ) : (
            data.map((item) => (
              <MovieCard
                key={item.id}
                id={item.id}
                poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                title={item.title}
                rate={item.vote_average * 10}
                votes={item.vote_count}
                date={formatDate(item.release_date)}
              />
            ))
          )
        }
      </div>
    </div>
  )
}

export default ListMovie
