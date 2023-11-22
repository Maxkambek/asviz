import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const HeadSwiper = () => {
    return (
        <>
            <div className="HeadSwiper">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}

                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swip_shadow">
                            <div className="swip_name">
                                ASVIZ
                            </div>
                            <div className="swip_h">
                                Сертификация высоковольтных и электротехнических изделий
                            </div>
                            <div className="swip_btn">
                                <a target={'_blank'} rel="noreferrer" href="http://sw2.customs.uz/"><button class="btn">ОФОРМИТЬ ЗАЯВКУ
                                </button></a>
                            </div>
                        </div>
                        <img className="swip_img" src="/img/Swip_1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swip_shadow">
                            <div className="swip_name">
                                ASVIZ
                            </div>
                            <div className="swip_h">
                                Сертификация высоковольтных и электротехнических изделий
                            </div>
                            <div className="swip_btn">
                                <a target={'_blank'} rel="noreferrer" href="http://sw2.customs.uz/"><button class="btn">ОФОРМИТЬ ЗАЯВКУ
                                </button></a>
                            </div>
                        </div>
                        <img className="swip_img" src="/img/Swip_2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swip_shadow">
                            <div className="swip_name">
                                ASVIZ
                            </div>
                            <div className="swip_h">
                                Сертификация высоковольтных и электротехнических изделий
                            </div>
                            <div className="swip_btn">
                                <a target={'_blank'} rel="noreferrer" href="http://sw2.customs.uz/"><button class="btn">ОФОРМИТЬ ЗАЯВКУ
                                </button></a>
                            </div>
                        </div>
                        <img className="swip_img" src="/img/Swip_3.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default HeadSwiper