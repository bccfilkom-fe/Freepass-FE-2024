import React from 'react'

const about = () => {

    return (
        <div id="about" className='bg-slate-950 dark:bg-black w-screen h-[80vh] py-10 z-20 relative'>
            <div className='flex flex-col justify-center items-center  w-screen h-[80%]'>
                <h1 data-aos="fade-down" className="text-white lg:text-4xl md:text-[3.8rem] text-2xl font-unigeo text-center m-10">About Me</h1>
                <div data-aos="fade-right" className='w-[70%]'>
                    <p className='text-center text-white opacity-50 font-normal lg:text-xl md:text-3xl text-base'>
                        Hello everyone, allow me to introduce myself. I am Achmal Pradipta Aditama, commonly known as Achmal. Currently, I am pursuing my education at Brawijaya University, Faculty of Computer Science, majoring in Information Technology Education. My specific interest lies in the field of front-end development. Up to this point, I have successfully completed several personal projects and collaborated on team projects. Further information about my journey and works can be found on this website. Thank you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about
