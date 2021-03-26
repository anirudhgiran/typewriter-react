import React, { useEffect, useRef, useState } from 'react'

const Typewriter = () => {

    const el = useRef();
    const words = ["Anirudh", "Giran", "Saini"];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [duration, setDuration] = useState(200);
    const [currentWord, setCurrentWord] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {

            setIndex(index % words.length);
            setIsEnd(false);

            if (!isDeleting && subIndex <= words[index].length) {
                setCurrentWord((prev) => prev.concat(words[index][subIndex]));
                setSubIndex((prev) => prev += 1);
                el.current.innerHTML = currentWord;
            }

            if (isDeleting && subIndex > 0) {
                setCurrentWord((prev) => prev.substring(0, prev.length - 1));
                setSubIndex((prev) => prev -= 1);
                el.current.innerHTML = currentWord;
            }

            if (subIndex === words[index].length) {
                setIsEnd(true);
                setIsDeleting(true);
            }

            if (subIndex === 0 && isDeleting) {
                setCurrentWord("");
                setIsDeleting(false);
                setIndex((prev) => prev += 1);
            }

            const spedUp = 50;
            const normalSpeed = 200;
            setDuration(isEnd ? 1500 : isDeleting ? spedUp : normalSpeed);


        }, duration);

        return () => clearInterval(interval);
    }, [subIndex, index, currentWord, isEnd, isDeleting, duration, words])

    // const typewriter = () =>{
    //     setIsEnd(false);
    //     setIndex(index % words.length);

    //     if(!isDeleting && subIndex <= words[index].length){
    //         setCurrentWord((prev) => prev += words[index][subIndex]);
    //         setSubIndex((prev) => prev += 1);
    //         el.current.innerHTML = currentWord;
    //     }

    //     if(isDeleting && subIndex >= 0){
    //         setCurrentWord((prev) => prev.substring(0, prev.length - 1))
    //         setSubIndex((prev) => prev -= 1);
    //     }

    //     if( subIndex === words[index].length){
    //         setIsEnd(true);
    //         setIsDeleting(true);
    //     }

    //     if(subIndex === 0 && isDeleting){
    //         setCurrentWord("");
    //         setIsDeleting(false);
    //         setIsEnd(false);
    //     }

    //     const spedUp = 50;
    //     const normalSpeed = 200;
    //     const time = isEnd ? 1500 : isDeleting ? spedUp : normalSpeed;

    //     setTimeout(typewriter, time);
    // }

    // useEffect(()=>{
    //     typewriter();
    // }, [subIndex])

    return (
        <>
            <h1 ref={el}>Anirudh Giran</h1>
        </>
    )
}

export default Typewriter
