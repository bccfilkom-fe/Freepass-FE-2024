// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import CircularWithValueLabel from '../feedback/CircularPercentageWithLabel'
import { useTheme } from '../../theme/ThemeProvider'

const MovieCard = ({title, rate, votes, poster, id, date}) => {
  const {theme} = useTheme()

  return (
    <Link to={`/movie/detail/${id}`} className={`flex flex-col lg:w-200 lg:h-450 sm:w-150 sm:h-350 w-100 h-300 shrink-0 gap-2 ${theme == 'dark' ? 'text-soft-white' : 'text-black-1'} duration-500 transition-all`}>
        <div className="lg:w-full lg:h-300 sm:h-225 h-150 overflow-hidden">
            <img className="lg:w-full lg:h-full object-cover hover:scale-110 transition-transform" src={poster} alt={title} />
        </div>
        
        <div className="flex flex-col lg:gap-0.5 sm:gap-0.5 gap-0.5">
            <h6 className='font-bold text-ellipsis'>{title}</h6>
            <h6 className='text-ellipsis text-soft-white brightness-50'>{date}</h6>
        </div>

        <div className="flex flex-row sm:gap-3 gap-2 lg:mt-1 sm:mt-1 items-center">
            <CircularWithValueLabel value={rate} isThemeChange={true}/>
            <h7>{votes} votes</h7>
        </div>
    </Link>
  )
}

export default MovieCard