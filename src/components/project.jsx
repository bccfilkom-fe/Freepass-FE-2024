import React from "react"
import '../index.css'
import gameCorner from '../assets/project/game-corner.png'
import gameIcon from '../assets/project/gameIcon.png'
import galeriIcon from '../assets/project/galeriIcon.png'
import galeriku from '../assets/project/galeriku.png'
import web from '../assets/project/achmal-web.png'
import webIcon from '../assets/project/webIcon.png'
import porto from '../assets/project/porto.png'
import portoIcon from '../assets/project/portoIcon.png'
import cv from '../assets/project/cv.png'
import cvIcon from '../assets/project/cvIcon.png'
import materi from '../assets/project/materi.png'
import materiIcon from '../assets/project/materiIcon.png'
import dicoding from '../assets/project/dicoding.png'
import dicodingIcon from '../assets/project/dicodingIcon.png'
import newYear from '../assets/project/2024.png'
import newYearIcon from '../assets/project/2024Icon.png'
// MUI tabs
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const ProjectCard = ({ icon, frontText, imgContent, titleDesc, tech, link }) => {
    return (
        <div data-aos="fade-up-left" className="card overflow-visible lg:w-96 md:w-80 w-72 h-56 lg:h-72">
            <div className="content w-full h-full rounded">
                <div className="back bg-gray-900 absolute w-full h-full rounded overflow-hidden justify-center flex items-center">
                    <div className="back-content absolute bg-gray-900 rounded text-white flex flex-col justify-center items-center w-[99%] h-[99%] gap-8">
                        <img src={icon} alt="" />
                        <strong className="-mt-10">{frontText}</strong>
                    </div>
                </div>
                <div className="front bg-gray-900 absolute w-full h-full rounded overflow-hidden">
                    <div className="img absolute w-full h-full object-cover object-center">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="left"></div>
                        <div className="circle" id="bottom"></div>
                        <div className="circle" id="top"></div>
                    </div>

                    <div className="front-content absolute w-full h-full p-2 flex flex-col justify-between">
                        <div className="project-img">
                            <img src={imgContent} alt="" />
                        </div>
                        <div className="description flex w-full">
                            <div className="w-full">
                                <div className="title max-w-full flex justify-between text-xs">
                                    <strong>{titleDesc}</strong>
                                </div>
                                <div className="card-footer">tech &nbsp; : {tech}</div>
                            </div>
                            <button className="">
                                <a href={link} target="_blank">
                                    <span>visit</span>
                                </a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

// tabs MUI
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const project = () => {

    // tabs MUI
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <div className='project w-screen bg-slate-950 dark:bg-black px-12 py-10 z-[5] relative'>
                <h1 data-aos="fade-down" id="project" className="text-white lg:text-4xl md:text-[3.8rem] text-2xl font-unigeo text-center md:pb-10 lg:pb-1 lg:py-10">My Projects</h1>
                {/* card project */}
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="All" {...a11yProps(0)} style={{ color: 'white' }} />
                            <Tab label="Portfolio" {...a11yProps(1)} style={{ color: 'white' }} />
                            <Tab label="Other" {...a11yProps(2)} style={{ color: 'white' }} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                            <ProjectCard
                                icon={gameIcon}
                                frontText="Game Corner"
                                imgContent={gameCorner}
                                titleDesc="Game Corner Filkom UB"
                                tech="Figma, React, Tailwind, Node JS, Vercel."
                                link="https://s.id/game-corner"
                            />
                            <ProjectCard
                                icon={galeriIcon}
                                frontText="GaleriKu"
                                imgContent={galeriku}
                                titleDesc="Galeri Project"
                                tech="HTML, CSS"
                                link="https://mamelilea.github.io/galeri-achmal/galeri.html"
                            />
                            <ProjectCard
                                icon={webIcon}
                                frontText="Achmal Web"
                                imgContent={web}
                                titleDesc="Achmal Web Portfolio"
                                tech="HTML, Bootstrap, Jquery, Java Script"
                                link="https://bit.ly/achmal-web"
                            />
                            <ProjectCard
                                icon={portoIcon}
                                frontText="Achmal Porto"
                                imgContent={porto}
                                titleDesc="Achmal Portfolio"
                                tech="HTML, Bootstrap, Jquery, Java Script, AOS Animation"
                                link="https://mamelilea.github.io/achmal-porto/portofolionew.html"
                            />
                            <ProjectCard
                                icon={cvIcon}
                                frontText="My CV"
                                imgContent={cv}
                                titleDesc="My Curiculum Vitae"
                                tech="HTML, CSS"
                                link="https://bit.ly/achmal-cv"
                            />
                            <ProjectCard
                                icon={materiIcon}
                                frontText="Web Materialize"
                                imgContent={materi}
                                titleDesc="Website Materialize"
                                tech="HTML, Materialize"
                                link="https://mamelilea.github.io/porto-materialize/coba.html"
                            />
                            <ProjectCard
                                icon={dicodingIcon}
                                frontText="Portfolio Dicoding"
                                imgContent={dicoding}
                                titleDesc="Website Portfolio Dicoding"
                                tech="HTML, CSS, Java Script"
                                link="https://mamelilea.github.io/website-dicoding/"
                            />
                            <ProjectCard
                                icon={newYearIcon}
                                frontText="New Year"
                                imgContent={newYear}
                                titleDesc="Website Countdown 2024"
                                tech="React, Tailwind"
                                link="https://s.id/happy-2k24"
                            />
                        </div>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                            <ProjectCard
                                icon={webIcon}
                                frontText="Achmal Web"
                                imgContent={web}
                                titleDesc="Achmal Web Portfolio"
                                tech="HTML, Bootstrap, Jquery, Java Script"
                                link="https://bit.ly/achmal-web"
                            />
                            <ProjectCard
                                icon={portoIcon}
                                frontText="Achmal Porto"
                                imgContent={porto}
                                titleDesc="Achmal Portfolio"
                                tech="HTML, Bootstrap, Jquery, Java Script, AOS Animation"
                                link="https://mamelilea.github.io/achmal-porto/portofolionew.html"
                            />
                            <ProjectCard
                                icon={cvIcon}
                                frontText="My CV"
                                imgContent={cv}
                                titleDesc="My Curiculum Vitae"
                                tech="HTML, CSS"
                                link="https://bit.ly/achmal-cv"
                            />
                            <ProjectCard
                                icon={materiIcon}
                                frontText="Web Materialize"
                                imgContent={materi}
                                titleDesc="Website Materialize"
                                tech="HTML, Materialize"
                                link="https://mamelilea.github.io/porto-materialize/coba.html"
                            />
                            <ProjectCard
                                icon={dicodingIcon}
                                frontText="Portfolio Dicoding"
                                imgContent={dicoding}
                                titleDesc="Website Portfolio Dicoding"
                                tech="HTML, CSS, Java Script"
                                link="https://mamelilea.github.io/website-dicoding/"
                            />
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                            <ProjectCard
                                icon={gameIcon}
                                frontText="Game Corner"
                                imgContent={gameCorner}
                                titleDesc="Game Corner Filkom UB"
                                tech="Figma, React, Tailwind, Node JS, Vercel."
                                link="https://s.id/game-corner"
                            />
                            <ProjectCard
                                icon={galeriIcon}
                                frontText="GaleriKu"
                                imgContent={galeriku}
                                titleDesc="Galeri Project"
                                tech="HTML, CSS"
                                link="https://mamelilea.github.io/galeri-achmal/galeri.html"
                            />
                            <ProjectCard
                                icon={newYearIcon}
                                frontText="New Year"
                                imgContent={newYear}
                                titleDesc="Website Countdown 2024"
                                tech="React, Tailwind"
                                link="https://s.id/happy-2k24"
                            />
                        </div>
                    </CustomTabPanel>
                </Box>
            </div>
        </>
    )
}

export default project
