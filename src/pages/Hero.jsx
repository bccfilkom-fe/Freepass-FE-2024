import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Typewriter } from "react-simple-typewriter"
import '../index.css'
import { Link } from 'react-scroll'
import readProgress from '../hooks/readProgress'
import LoadingPage from '../components/loading'
import Contact from '../pages/contact'
import Footer from '../components/footer'
import CarouselSkill from '../components/CarouselSkill'
import Project from '../components/project'
import About from '../pages/about'

const navigation = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skill' },
    { name: 'Project', href: 'project' },
    { name: 'Contact', href: 'contact' },
]

const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState(null);

    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
        setMobileMenuOpen(false);
    }
    // ini untuk scroll navbar
    useEffect(() => {
        const changeNav = () => {
            if (window.scrollY > 10) {
                setScrollNav(true);
            } else {
                setScrollNav(false);
            }
        };

        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);

    // progress scroll on top
    const completion = readProgress();

    // dark mode
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? "light" : "dark");
    };

    // loading page
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <>
            {
                loading ?
                    <LoadingPage /> :
                    <div>
                        <div id='hero' className={`bg-slate-950 dark:bg-black h-screen relative z-30`}>
                            <header className={`${scrollNav ? 'bg-slate-900 dark:bg-slate-950' : 'bg-slate-950, dark:bg-black'} fixed inset-x-0 top-0 z-50`}>
                                <nav className="flex items-center justify-between p-6 md:px-10 lg:px-8" aria-label="Global">
                                    <div className="flex lg:flex-1" >
                                        <Link to="hero"
                                            spy={true}
                                            smooth={true}
                                            offset={-40}
                                            duration={500} className="-m-1.5 p-1.5">
                                            <span className="sr-only">Your Company</span>
                                            <span className='cursor-pointer font-origin md:text-[2.5rem] lg:text-[2.5rem] text-2xl text-cyan-100'>ACHMAL</span>
                                        </Link>
                                    </div>
                                    <div className="flex lg:hidden gap-2">
                                        <div className=" lg:hidden lg:flex-1 lg:justify-end">
                                            <label className="ui-switch" >
                                                <input type="checkbox" name="" id="" />
                                                <div className="slider">
                                                    <div className="circleButton" onClick={handleThemeSwitch}></div>
                                                </div>
                                            </label>
                                        </div>
                                        <button
                                            type="button"
                                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                            onClick={() => setMobileMenuOpen(true)}
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <Bars3Icon className="h-6 w-6 md:h-9 md:-mt-1 md:w-9" aria-hidden="true" />
                                        </button>

                                    </div>
                                    <div className="hidden lg:flex lg:gap-x-12">
                                        {navigation.map((item) => (
                                            <Link
                                                to={item.href}
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                key={item.name}
                                                className="cursor-pointer text-sm font-semibold leading-6 text-slate-300">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                        <label className="ui-switch" >
                                            <input type="checkbox" name="" id="" />
                                            <div className="slider">
                                                <div className="circleButton" onClick={handleThemeSwitch}></div>
                                            </div>
                                        </label>
                                    </div>
                                </nav>
                                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                                    <div className="fixed inset-0 z-50" />
                                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                        <div className="flex items-center justify-between">
                                            <Link to="hero"
                                                spy={true}
                                                smooth={true}
                                                offset={-40}
                                                duration={500}
                                                onClick={() => handleNavItemClick(item)}
                                                className="-m-1.5 p-1.5">
                                                <span className="sr-only">Your Company</span>
                                                <span className='font-origin lg:text-[2.5rem] text-2xl text-cyan-900'>ACHMAL</span>
                                            </Link>
                                            <button
                                                type="button"
                                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="mt-6 flow-root">
                                            <div className="-my-6 divide-y divide-gray-500/10">
                                                <div className="space-y-2 py-6">
                                                    {navigation.map((item) => (
                                                        <Link
                                                            to={item.href}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-100}
                                                            duration={500}
                                                            key={item.name}
                                                            onClick={() => handleNavItemClick(item)}
                                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Dialog>
                                <span style={{ transform: `translateX(${completion - 100}%)` }} className='absolute bg-slate-50 w-full h-1 bottom-0'>

                                </span>
                            </header>

                            <div className="relative isolate px-6 lg:pt-14 pt-20     lg:px-8">
                                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">

                                    <div className="text-center flex flex-col items-center md:my-28 lg:my-0">
                                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl md:text-[5.5rem] lg:text-[5rem] lg:ml-6">
                                            Halo
                                        </h1>
                                        <div className='relative flex justify-center md:-ml-[8rem] lg:-ml-1 md:w-96 lg:w-96 w-56'>
                                            <h1 className="relative lg:w-36 md:w-44 w-20  text-4xl sm:text-6xl lg:text-[4rem] md:text-[4.5rem] font-bold tracking-tight text-slate-200 ">
                                                I'am <span className='mr-4'></span>
                                            </h1>
                                            <div className='lg:w-48 w-32'>
                                                <h1 className="lg:w-10 w-1 text-4xl font-bold tracking-tight text-cyan-200 sm:text-6xl md:text-[4.5rem] lg:text-[4rem]" >
                                                    <Typewriter words={['Achmal']} typeSpeed={150} loop deleteSpeed={150} delaySpeed={1000} cursor
                                                        cursorStyle='|' />
                                                </h1>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-sm lg:text-lg md:text-[1.8rem] leading-8 text-gray-600">
                                            welcome to my portfolio website, here you can find out more details about me, please support me always, thank you.
                                        </p>
                                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                            <a
                                                href="https://s.id/achmal-cv"
                                                target='_black'
                                                className="rounded-md bg-cyan-600 px-3.5 py-2.5 lg:text-sm md:text-base text-xs font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                            >
                                                MY CV
                                            </a>
                                            <a href="https://www.instagram.com/achmalp" target='_blank' className="ui-btn lg:text-base md:text-lg">
                                                <span>
                                                    Visit more <span aria-hidden="true">→</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <About></About>
                        <CarouselSkill></CarouselSkill>
                        <Project></Project>
                        <Contact></Contact>
                        <Footer></Footer>
                    </div>
            }
        </>
    )
}

export default Hero
