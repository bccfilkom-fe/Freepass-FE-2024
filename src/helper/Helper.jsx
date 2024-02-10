import { useEffect } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

const AutoScrollHard = ({ x, y }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(x, y)
  }, [pathname, x, y])

  return null
}

AutoScrollHard.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}

export default AutoScrollHard

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options)
  return formattedDate
}