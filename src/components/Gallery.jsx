import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <>
            <div className="Gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="gal_name">
                                Наши работы
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12 ">
                            <img src="/img/work_1.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 pt-3 pt-sm-0">
                            <img src="/img/work_2.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 pt-3 pt-lg-0">
                            <img src="/img/work_3.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 pt-3">
                            <img src="/img/work_4.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 pt-3">
                            <img src="/img/work_5.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 pt-3">
                            <img src="/img/work_6.jpg" alt="" className="w-100" />
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-2">
                            <Link to="/Rights">
                                <button class="btn">
                                    Подробнее
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery