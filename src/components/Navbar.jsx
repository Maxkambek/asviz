import React, { useState } from 'react'
import { Link, useLocation, } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const [burger, setBurger] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }


  window.addEventListener('scroll', changeNavbar);

  return (
    <>
      <div className={`Navbar ${navbar ? 'active' : ''}`}>
        <div className="nav_box">
          <div className="container ">
            <div className="row justify-content-between">
              <div className="col-lg-1 col-sm-2 col-4 text-center">
                <Link to="/" ><img className='nav_logo' src="/img/logo.svg" alt="" /></Link>
              </div>
              <div className={`col-10 d-flex  align-items-between justify-content-evenly nav_a_box ${burger ? 'active' : ''}`}>
                <Link to="/" className={`nav_a ${location.pathname === '/' ? 'active' : ''}`} >Главная</Link>
                <Link to="/About" className={`nav_a ${location.pathname === '/About' ? 'active' : ''}`} >О нас</Link>
                <Link to='/Servis' className={`nav_a ${location.pathname === '/Servis' ? 'active' : ''}`}>Сертификация</Link>
                <Link to='/Price' className={`nav_a ${location.pathname === '/Price' ? 'active' : ''}`}>Расценки </Link>
                <Link to='/Contact' className={`nav_a ${location.pathname === '/Contact' ? 'active' : ''}`}>Контакты</Link>
                <Link to='/Rights' className={`nav_a ${location.pathname === '/Rights' ? 'active' : ''}`}>Hаши работы</Link>
                <div className="soc_box">
                  <a target={'_blank'} rel="noreferrer" href="https://t.me/asviz_uz"><img src="/img/telegram.svg" alt="" className="soc_img" /></a>
                  <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/asviz_uz/"><img src="/img/instagram.svg" alt="" className="soc_img" /></a>
                  <a href="/#"><img src="/img/facebook.svg" alt="" className="soc_img" /></a>
                </div>
              </div>
              <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                <div className="burger_up "></div>
                <div className="burger_down"></div>
              </div>


              {/* <div className="col-lg-1 col-2 d-flex align-items-center justify-content-center">
                <select className='nav_lang_box' name="" id="">
                  <option className='nav_lang' value="">RU</option>
                  <option className='nav_lang' value="">UZB</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar