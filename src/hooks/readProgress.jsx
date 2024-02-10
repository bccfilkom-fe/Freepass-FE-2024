import { useEffect, useState } from "react"

const readProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if(scrollHeight){
                setCompletion(
                    Number((scrollProgress / scrollHeight).toFixed(2)) * 100
                )
            }
        }

        window.addEventListener('scroll', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
        }

    }, []);

    return completion;
}

export default readProgress
