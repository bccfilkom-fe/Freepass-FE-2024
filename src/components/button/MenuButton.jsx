import React from 'react'
import { useTheme } from '../../theme/ThemeProvider'

const MenuButton = ({handle, isOpen}) => {
  const {theme} = useTheme()

  return (
    <button onClick={handle} className={`${isOpen ? '' : ''} lg:w-10 lg:h-10 sm:w-9 sm:h-9 w-6 h-6 flex flex-col justify-center sm:gap-1.5 gap-0.75 group`}>
        <div className={`${isOpen ? 'transition-all rotate-45 relative top-1.5' : 'rounded-full'} lg:w-8 lg:h-0.75 sm:w-7 sm:h-0.5 w-5 h-0.5 ${theme == 'dark' ? 'bg-white-1' : 'bg-gray'} mx-auto group-hover:bg-red`}/>

        <div className={`${isOpen ? 'transition-all opacity-0' : 'rounded-full'} lg:w-8 lg:h-0.75 sm:w-7 sm:h-0.5 w-5 h-0.5 ${theme == 'dark' ? 'bg-white-1' : 'bg-gray'} mx-auto group-hover:bg-red`}/>

        <div className={`${isOpen ? 'transition-all -rotate-45 relative bottom-1.5' : 'rounded-full'} lg:w-8 lg:h-0.75 sm:w-7 sm:h-0.5 w-5 h-0.5 ${theme == 'dark' ? 'bg-white-1' : 'bg-gray'} mx-auto group-hover:bg-red`}/>
    </button>
  )
}

export default MenuButton