import PropTypes from "prop-types"

const TransparentButton = ({ handle, name, type, icon }) => {
  const handleClick = (event) => {
    event.preventDefault()
    handle()
  }

  return (
    <button
      className={`flex flex-row lg:p-2.5 lg:gap-4 text-white tl bg-transparent text-white-1 font-semibold hover:brightness-75 transition-all w-fit`}
      onClick={handleClick}
      type={type}
    >
      {icon && <img src={icon} alt={`${name} icon`} className="lg:w-8 lg:h-8"/>}
      <h4>{name}</h4>
    </button>
  )
}


TransparentButton.propTypes = {
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
}

export default TransparentButton
