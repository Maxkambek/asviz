import React, { useEffect, useState } from 'react'
import Feedback from '../components/Feedback';
import Loader from '../components/Loader';

const Contact = () => {


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
          <div className="top_2"></div>

          <div className="Contact">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <iframe className='contact_map' title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.916808490678!2d69.258496!3d41.288914999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ae9511ee6cb%3A0x191a7d956d375ac0!2zNDEg0YPQu9C40YbQsCDQqNC-0YLQsCDQoNGD0YHRgtCw0LLQtdC70LgsINCi0LDRiNC60LXQvdGCIDEwMDA3MA!5e0!3m2!1sru!2s!4v1662552185165!5m2!1sru!2s" loading="lazy"></iframe>
                </div>
                <div className="col-md-6 col-12">
                  <div className="con_name">
                    Руководитель:
                  </div>
                  <div className="con_name_org">
                    эксперт-аудитор,<br /> <span> Исамухамедов Зафар Захидович</span>
                  </div>

                </div>
                <div className="col-md-6 col-12">
                  <div className="con_name">
                    Адрес:
                  </div>
                  <div className="con_name_org">
                    г. Ташкент, 100070, Яккасарайский район, ул. Ш.Руставели, дом 41
                  </div>
                </div>
                <div className="col-md-6 col-12 text-center">
                  <div className="con_h">
                    Почта:
                  </div>
                  <a target={'_blank'} rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=asviz@mail.ru' className="con_mail">asviz@mail.ru</a>

                </div>
                <div className="col-md-6 col-12">  <div className="con_h">
                  Телефон:
                </div>
                  <div className="con_h_box">
                    <a href="tel:974024240" className="con_h_tel">(97) 402-42-40</a>
                    <a href="tel:935024240" className="con_h_tel_2">(93) 502-42-40</a>
                  </div></div>
              </div>
            </div>
          </div>

        </>
      }

      <Feedback />
    </>

  )
}

export default Contact