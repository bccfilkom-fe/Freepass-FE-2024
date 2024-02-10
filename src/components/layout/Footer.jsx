import logo from '../../assets/logo/logo-1.svg'
import { useTheme } from '../../theme/ThemeProvider'

const Footer = () => {
  const {theme} = useTheme()

  return (
    <footer className={`flex flex-row w-full lg:h-52 lg:px-100 lg:py-9 sm:h-52 sm:px-100 sm:py-9 h-20 px-100 py-5 ${theme == 'dark' ? 'border-white-1 border-t bg-black-1' : 'border-red border-t-4 bg-gray'} items-center justify-center`}>
        <img src={logo} alt="logo" className='lg:h-24 sm:h-24 h-10'/>
    </footer>
  )
}

export default Footer