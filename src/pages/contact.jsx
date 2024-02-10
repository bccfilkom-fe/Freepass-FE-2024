import React, { useEffect } from 'react';
import '../index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const contact = () => {
    const notif = () => toast.success("Your message has been sent.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
    });

    useEffect(() => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwV7NPEGdPlsHri_lud3yXYKwOIONEZmBhq12vYj001zAGYmc8tgvKvCrLBwOjSQcAMfg/exec';
        const form = document.forms['Message-Website'];
        const btnKirim = document.querySelector('.form-submit-btn')
        const btnLoad = document.querySelector('.form-load-btn')

        const handleSubmit = async (e) => {
            e.preventDefault();
            btnLoad.classList.toggle('hidden');
            btnKirim.classList.toggle('hidden');
            try {
                const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });

                console.log('Success!', response)
                notif();
                btnLoad.classList.toggle('hidden');
                btnKirim.classList.toggle('hidden');
                form.reset();
            } catch (error) {
                console.error('Error!', error.message);
            }
        };

        form.addEventListener('submit', handleSubmit);

        // Hapus event listener saat komponen dibongkar (unmounted)
        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div id='contact' className='w-screen lg:h-screen h-fit flex flex-col items-center lg:py-0 py-20  bg-slate-950 dark:bg-black z-[5] sticky'>
            <div className='lg:flex lg:flex-row flex flex-col lg:justify-center items-center lg:my-20 lg:gap-10 gap-7'>
                <div className='text-white lg:w-[30rem] md:w-[80vw]  rounded-2xl flex flex-col justify-center items-center'>
                    <h2 data-aos="fade-right" className='font-glacial lg:text-6xl md:text-6xl text-4xl lg:m-0 m-5'>Let's <span style={{ color: 'rgb(2 6 23)', textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff' }}
                    >talk</span> for <br />Something special</h2>
                    <p data-aos="fade-left" className='lg:w-[29rem] md:w-[55vw] w-[17rem] lg:text-sm md:text-2xl text-xs text-justify text-slate-400 lg:m-5 mb-10'>I am excited about the opportunity to work with you and contribute to your projects as a front-end developer.</p>
                    {/* sosmed saya di contact */}
                    <ul className='sosmed-contact lg:w-[29rem] flex lg:gap-5 h-10 gap-2 lg:m-5 w-[17rem]'>
                        <Tooltip title="mamelilea" placement='bottom'>
                            <a data-aos="zoom-in" href="https://github.com/mamelilea" target='_blank'><li className='relative tooltip-container w-10 lg:w-10 md:w-16 h-10 lg:h-10 md:h-16 bg-transparent border border-3 border-slate-50 flex justify-center items-center mail-parent hover:bg-slate-700 hover:border-slate-700 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 40 40">
                                    <path fill="#000" className='github-child' d="M38.5,20c0,10.299-8.391,18.5-18.5,18.5C9.892,38.5,1.5,30.299,1.5,20S9.701,1.5,20,1.5 S38.5,9.701,38.5,20z"></path><path fill="#fff" className='cat-github' d="M33.171,19.24c0,2.306-1.191,5.51-3.148,7.102c-1.582,1.289-3.672,1.695-6.034,1.823 c0.888,0.539,1.479,1.515,1.479,2.629v7.636C23.979,38.8,22.429,39,20.832,39c-1.582,0-3.127-0.195-4.606-0.565v-5.017 c-0.642,0.2-1.484,0.318-2.568,0.262c-3.595-0.19-4.108-2.372-4.683-3.913c-0.58-1.541-2.378-1.736-2.121-2.372 c1.241-0.426,2.215-0.02,2.874,0.482c0.523,0.398,0.887,0.961,1.131,1.571c0.279,0.697,1.02,1.86,2.86,1.86 c1.299,0,2.069-0.303,2.511-0.601c0.026-1.089,0.621-2.033,1.494-2.552c-2.506-0.159-4.704-0.632-6.321-2.039 c-1.797-1.561-2.881-4.678-2.881-6.876c0-1.833,0.755-4.093,2.049-5.515c0.041-0.041,0.077-0.087,0.128-0.128 c-0.298-0.894-0.642-2.66,0.195-4.822c2.49-0.046,4.457,1.315,5.258,1.972c1.448-0.334,3.03-0.493,4.694-0.493 c1.705,0,3.333,0.149,4.806,0.493c0.801-0.657,2.773-2.018,5.258-1.967c0.873,2.249,0.467,4.072,0.164,4.925 C32.401,15.229,33.171,17.391,33.171,19.24z"></path><path fill="#788b9c" d="M20,39C9.523,39,1,30.477,1,20C1,9.346,9.346,1,20,1s19,8.346,19,19C39,30.477,30.477,39,20,39z M20,2C9.907,2,2,9.907,2,20c0,9.925,8.075,18,18,18s18-8.075,18-18C38,9.907,30.093,2,20,2z"></path>
                                </svg>
                            </li></a>
                        </Tooltip>
                        <Tooltip title="Achmal" placement='bottom'>
                            <a data-aos="zoom-in" href="https://www.linkedin.com/in/achmal-pradipta-aditama-742b85285/" target='_blank'><li className='relative tooltip-container w-10 lg:w-10 md:w-16 h-10 lg:h-10 md:h-16 bg-transparent border border-3 border-slate-50 flex justify-center items-center mail-parent hover:bg-slate-700 hover:border-slate-700 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                    <path className='link-child' fill='#fff' d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </li></a>
                        </Tooltip>
                        <Tooltip title="achmalpradiptaaditama@gmail.com" placement='bottom'>
                            <a data-aos="zoom-in" href="mailto:achmalpradiptaaditama@gmail.com" target="_blank"><li className='w-10 lg:w-10 md:w-16 h-10 lg:h-10 md:h-16 bg-transparent border border-3 border-slate-50 flex justify-center items-center mail-parent hover:bg-slate-700 hover:border-slate-700 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"
                                    className='mail-child'>
                                    <path fill='#fff' className='mail-child' d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                                </svg>
                            </li></a>
                        </Tooltip>
                        {/* quotes */}
                        <React.Fragment>
                            <Button data-aos="zoom-in" style={{
                                border: 'solid', borderColor: 'white', borderWidth
                                    : '1px', color: 'white'
                            }} variant="outlined" onClick={handleClickOpen}>
                                click this
                            </Button>
                            <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle>{"read this my friend..."}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        <div className='bg-white bg-opacity-30 w-[80%] h-[60%] rounded-3xl flex justify-center items-center font-quote lg:text-4xl text-2xl'>busy ourselves with improving yourself, enjoy and appreciate our life journey. Be the best version of yourself, see u on top, cheer up✌️😉🙌</div>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>ok</Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                    </ul>

                </div>

                <ToastContainer style={{ display: 'flex', top: '15%' }}></ToastContainer>
                <div data-aos="zoom-in-up" className="form-container lg:w-[30rem] md:w-[60vw] lg:h-[24.6rem] md:h-[32rem] w-80">
                    <form name='Message-Website' className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input required name="name" id="name" type="text" placeholder='Your name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">Message for Me</label>
                            <textarea required cols={50} rows={10} id="textarea" name="pesan" defaultValue={""} placeholder='Write a message for Me' />
                        </div>
                        <button type="submit" className="form-submit-btn">Send</button>
                        {/* button loading */}
                        <span className="form-load-btn hidden text-center">
                            <div
                                role="status"
                                className="inline-block h-4 w-4 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            >
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                </span>
                            </div>
                            Loading
                        </span>
                    </form>
                    <h3 className='text-center'>or click <Link className='text-[#86A7FC]' to="/chat" rel="noopener noreferrer">this</Link> to send an anonymus message</h3>
                </div>

            </div>
        </div>
    )
}

export default contact
