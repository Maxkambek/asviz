import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";


import { EffectCards } from "swiper";
import { Link } from "react-router-dom";

const HeadWe = () => {
    return (
        <>
            <div className="HeadWe">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className=" col-lg-6 col-12">
                            <div className="headwe_h">
                                О компании <span>Asviz</span>
                            </div>
                            <div className="headwe_p">         ОС ВЭТИ «ASVIZ»  имеет административную, финансовую и юридическую независимость от изготовителей (поставщиков) ВЭТИ и их заказчиков (потребителей) и обладает необходимой технической компетенцией и соответствующим  правовым статусом.
                            </div>
                            <div className="headwe_p">        При проведении процедур сертификации ОС ВЭТИ использует соответствующие права ООО “ASVIZ” (юридическая и административная ответственность, расчетный счет в банке и т.п.). Основные средства, которыми располагает ОС ВЭТИ,  являются его собственностью.
                            </div>

                            <div className="headwe_btn">
                                <Link to="/About"> <button class="btn"> Подробнее
                                </button></Link>

                            </div>
                        </div>
                        <div className=" col-lg-5 col-12 text-center d-flex align-items-center justify-content-center mt-lg-0 mt-5">
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}

                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                {/* <SwiperSlide><img className='w-100' src="/img/sertifikat.png" alt="" /></SwiperSlide> */}
                                <SwiperSlide>
                                    <img className='head_we_img' src="/img/sertifikat_3.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadWe