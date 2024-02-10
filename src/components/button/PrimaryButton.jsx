import PropTypes from "prop-types"

const PrimaryButton = ({ handle, name, type, icon, width }) => {
  const handleClick = (event) => {
    event.preventDefault()
    handle()
  }

  return (
    <button
      className={`flex flex-row lg:py-2 lg:px-5 lg:gap-2 sm:py-2 sm:px-5 sm:gap-2 py-1 px-2 gap-1 justify-center items-center text-white lg:rounded-10 sm:rounded-10 rounded-md tl bg-red text-white-1 font-semibold hover:brightness-90 ${
        width === "full" ? "w-full" : width === "fit" ? "w-fit" : ""
      }`}
      onClick={handleClick}
      type={type}
    >
      {icon && <img src={icon} alt={`${name} icon`} className="w-2 h-2 sm:w-fit sm:h-fit" />}
      <p>{name}</p>
    </button>
  )
}


PrimaryButton.propTypes = {
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
  width: PropTypes.oneOf(["full", "fit"]),
}

export default PrimaryButton
