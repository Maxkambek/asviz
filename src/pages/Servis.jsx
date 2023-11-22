import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Sertification from '../components/Sertification';
import Footer from '../components/Footer';
import SertificatUse from '../components/SertificatUse';
import Complaints from '../components/Complaints';
import SertifNum from '../components/SertifNum';
import Responsibly from '../components/Responsibly';

const Servis = () => {

  const [isLoader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  })


  return (
    <>
      {isLoader ? <>
        <Loader />
      </> : <>
        <div className="top"></div>
        <Sertification />
        {/* <SertifNum /> */}
        {/* <SertificatUse /> */}
        {/* <Responsibly /> */}
        {/* <Complaints /> */}
        <Footer />
      </>}
    </>
  )
}

export default Servis