import iconDark from '../../assets/icon/theme/Dark.svg'
import iconLight from '../../assets/icon/theme/Light.svg'

const ThemeToggleButton = ({ currentTheme, handleThemeChange }) => {
  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    handleThemeChange(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${currentTheme === 'dark' ? 'bg-black-1' : 'bg-soft-white'} flex flex-row lg:w-12 lg:h-6 lg:px-1 w-6 h-6 px-0.5 sm:w-10 sm:h-5 sm:px-1 items-center rounded-full bg-black border border-gray relative transition-all sm:delay-150 duration-500 group`}
    >
      <div
        className={`${currentTheme === 'dark' ? 'bg-soft-white translate-x-0' : 'bg-gray lg:translate-x-6 sm:translate-x-5'} lg:h-4 lg:w-4 sm:h-3 sm:w-3 rounded-full transition-all duration-300 delay-100 flex-shrink-0 z-20 group-hover:brightness-75 hidden sm:block`}
      />
      <div className="w-full justify-center items-center flex z-10">
        <img src={iconDark} className={`${currentTheme === 'light' && 'opacity-0'} lg:w-4 sm:w-3 transition-all duration-300`} />
        <img src={iconLight} className={`${currentTheme === 'dark' && 'opacity-0'} lg:w-4 sm:w-3 transition-all duration-300 absolute sm:left-2`} />
      </div>
    </button>
  )
}

export default ThemeToggleButton
