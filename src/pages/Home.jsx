import React, { useEffect, useState } from 'react'
import Responsibly from '../components/Responsibly'
import Footer from '../components/Footer'
import HeadSwiper from '../components/HeadSwiper'
import Loader from '../components/Loader'
import HeadWe from '../components/HeadWe'
import Feedback from '../components/Feedback'
import Gallery from '../components/Gallery'

const Home = () => {




    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 2000);
    })

    return (

        <>
            {isLoader ? <>
                <Loader />
            </> :
                <>
                    <HeadSwiper />
                    <HeadWe />
                    {/* <Responsibly /> */}
                    {/* <Sertification /> */}
                    <Gallery />
                    <Feedback />
                    <Footer />
                </>
            }

        </>
    )
}

export default Home