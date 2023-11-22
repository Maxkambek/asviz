import React, { useEffect, useState } from 'react'
import AboutWe from '../components/AboutWe';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import HeadSwiper from '../components/HeadSwiper'
import Loader from '../components/Loader';

const About = () => {

    const [isLoader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    })


    return (
        <>
            {isLoader ?
                <><Loader />
                </> : <>
                    <HeadSwiper />
                    <AboutWe />
                    <Feedback />
                    <Footer />
                </>}
        </>
    )
}

export default About