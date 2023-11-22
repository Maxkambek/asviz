import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <div className="foot_box">
                <img className='foot_logo' src="/img/logo.svg" alt="" />
                <div className="foot_logo_h">
                  ASVIZ
                </div>
              </div>
              <div className="foot_logo_p">
                Орган по сертификации высоковольтных и электротехнических изделий
              </div>
            </div>
            {/* <div className="col-3 d-flex flex-column justify-content-center">
              <Link className='foot_h' to='/'>Главная</Link>
              <Link className='foot_h' to='/About'>О нас</Link>
              <Link className='foot_h' to='/Услуги'>Сервис</Link>
              <Link className='foot_h' to='/Contact'>Контакты</Link>
            </div> */}
            <div className="col-lg-6">
              <div className="con_we">Наши контакты</div>
              <div className="con_h">Руководитель: </div>
              <div className="con_p">эксперт-аудитор, <span>Исамухамедов Зафар Захидович</span> </div>
              <div className="con_h">Адрес:</div>
              <div className="con_p">г. Ташкент, 100070, Яккасарайский район, ул. Ш.Руставели, дом 41</div>
              <div className="con_box">
                <div className="con_box_1">
                  <div className="con_h">Почта:</div>
                  <a target={'_blank'} rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=asviz@mail.ru' className="con_p">asviz@mail.ru</a></div>
                <div className="con_box_2">
                  <div className="con_h">Телефон:</div>
                  <div className="con_tel_box">
                    <a href="tel:974024240" className="con_tel_1">(97) 402-42-40</a>
                    <a href="tel:935024240" className="con_tel_2">(93) 502-42-40</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer