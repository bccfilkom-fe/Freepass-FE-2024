import React, { useEffect, useState, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import baby from '../assets/chat/baby.png';
import love from '../assets/chat/loveMan.png';
import { Typewriter } from "react-simple-typewriter"
import gsap from "gsap";


function anonimChat() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [editMessage, setEditMessage] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [db, setDb] = useState(null);

    const messageInputRef = useRef(null);

    const updateMessages = (firestoreDb) => {
        const unsubscribe = onSnapshot(collection(firestoreDb, 'message'), (snapshot) => {
            const fetchedMessages = snapshot.docs.map(doc => ({
                key: doc.id,
                messageText: doc.data().message,
                avatarInitials: doc.data().avatarInitials,
                timestamp: doc.data().timestamp
            }));
            const sortedMessages = fetchedMessages.sort((a, b) => b.timestamp - a.timestamp);
            setMessages(sortedMessages);
        });

        return unsubscribe;
    };


    useEffect(() => {
        if (messageInputRef.current) {
            messageInputRef.current.focus();
        }
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDcdM2wXkgw7fIkuJ1smwWJb3wCiqoUEOo",
            authDomain: "crud-pesan.firebaseapp.com",
            projectId: "crud-pesan",
            storageBucket: "crud-pesan.appspot.com",
            messagingSenderId: "781291729430",
            appId: "1:781291729430:web:850c21a66c35e6ccd97b37"
        };

        const app = initializeApp(firebaseConfig);
        const firestoreDb = getFirestore(app);
        setDb(firestoreDb);

        const unsubscribe = updateMessages(firestoreDb);

        // gsap
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.to(".slider-load", { y: "-100%", duration: 1.5, delay: 5 });
        tl.to(".intro-load", { y: "-100%", duration: 1 }, "-=1.5");

        setTimeout(() => {
            setAnimationComplete(true);
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            // Set fokus pada input teks setelah animasi selesai
            if (messageInputRef.current) {
                messageInputRef.current.focus();
            }
        }
        }, 7000);

        return () => unsubscribe();
    }, []);



    useEffect(() => {
        if (animationComplete && messageInputRef.current) {
            messageInputRef.current.focus();
        }
    }, [animationComplete]);
    const handleMessageSend = async () => {
        if (!newMessage) return;
        try {
            const timestamp = new Date().getTime();
            if (editMessage) { // Jika ada pesan yang sedang diedit
                await updateDoc(doc(db, 'message', editMessage.key), { message: newMessage, timestamp });
                setEditMessage(null);

                // Perbarui state pesan dengan pesan yang telah diedit
                setMessages(prevMessages => {
                    const updatedMessages = prevMessages.map(message => {
                        if (message.key === editMessage.key) {
                            return { ...message, messageText: newMessage };
                        }
                        return message;
                    });
                    return updatedMessages;
                });
            } else {
                const docRef = await addDoc(collection(db, 'message'), { message: newMessage, timestamp });
                const newMessageObj = { key: docRef.id, messageText: newMessage };
                setMessages(prevMessages => [newMessageObj, ...prevMessages]);
            }
            setNewMessage('');
        } catch (error) {
            console.error("Error adding/updating document:", error);
        }
    };

    const handleEdit = (key) => {
        const messageToEdit = messages.find(message => message.key === key);
        setEditMessage(messageToEdit);
        setNewMessage(`${messageToEdit.messageText}`);
    };
    const handleDelete = async (key) => {
        try {
            setMessages(prevMessages => prevMessages.filter(message => message.key !== key));
            await deleteDoc(doc(db, 'message', key));
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };



    return (
        <>
            <section className='w-screen h-max overflow-hidden'>
                <div className="bg-[#111827] w-screen lg:h-screen h-max overflow-hidden flex flex-col justify-center items-center gap-5">

                    <div className='z-50 lg:flex lg:flex-row flex flex-col py-8 lg:py-0 items-center justify-center gap-20'>
                        <div className="card">
                            <div className="chat-header">Anonymus Chat</div>
                            <div className="chat-window">
                                {messages.slice().reverse().map((message) => (
                                    <ul key={message.key} className="list-none p-3 flex gap-3">
                                        <div>
                                            <Avatar alt="A">
                                                {message.avatarInitials}
                                            </Avatar>
                                        </div>
                                        <div className='flex flex-col gap-1 justify-start w-max'>
                                            <div id={`dataChat-${message.key}`} className='px-3 rounded-xl bg-slate-200 justify-center items-center flex'>{message.messageText}</div>
                                            <div className='flex gap-1 mx-3'>
                                                <button className='w-max h-5 hover:text-cyan-900 hover:underline  justify-center items-center flex text-xs ' onClick={() => handleEdit(message.key)}>edit</button>
                                                <button className='w-max h-5 hover:text-cyan-900 hover:underline justify-center items-center flex text-xs' onClick={() => handleDelete(message.key)}>delete</button>
                                            </div>
                                        </div>
                                    </ul>
                                ))}
                            </div>
                            <div className="chat-input">
                                {animationComplete && (
                                    <input
                                        ref={messageInputRef}
                                        type="text"
                                        id="message-input"
                                        className="message-input"
                                        placeholder="Type your message here"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleMessageSend();
                                            }
                                        }}
                                    />
                                )}
                                <button className="send-button" onClick={handleMessageSend}>Send</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 justify-cente items-center">
                            <img className='w-[28rem]' src={baby} alt="" />
                            <p className='text-white z-50'>
                                Back to <Link className=' text-cyan-600 hover:underline hover:text-cyan-400' to='/'> Homepage</Link>
                            </p>
                        </div>
                    </div>


                    {/* warna background blur */}
                    <div className="absolute w-full h-[110vh] md:h-[127vh] lg:h-screen overflow-hidden isolate px-6 pt-14 lg:px-8">
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>

                        <div
                            className="absolute inset-x-0 lg:top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>

                    </div>

                </div>
                <div className='intro-load fixed top-0 left-0 bg-[#080b12] w-full h-full z-[51] flex items-center justify-center'>
                    <h1 className='text-cyan-600 text-4xl md:text-5xl font-bold font-atwriter w-44 md:w-max text-center'>
                        <Typewriter words={['Send Your', 'Anonymous Message']} typeSpeed={60} />
                    </h1>
                </div>
                <div className="slider-load bg-[#111827] fixed top-0 left-0 w-full h-full z-[60] flex justify-center items-center ">
                    <div>
                        <img className='w-[28rem] mx-10 md:-mr-12' src={love} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default anonimChat
