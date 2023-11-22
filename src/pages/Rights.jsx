import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import GalWorks from '../components/GalWorks';
import Loader from '../components/Loader';

const Rights = () => {

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 2000);
    })
    return (


        <>
            {isLoader ? <>
                < Loader />
            </> :
                <>
                    <div className="top_2"></div>

                    <GalWorks />
                    <Footer />
                </>
            }
        </>
    )
}

export default Rights