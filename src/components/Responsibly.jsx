

// const Responsibly = () => {
// export default Responsibly

import React, { useState } from 'react'

const Responsibly = () => {

    const [open, setOpen] = useState('');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
        return (id)
    }
    return (
        <>
            <div className="Responsibly">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="res_name">
                                Права, обязанности
                                и ответственность
                            </div>
                        </div>
                    </div>
                    <div className="row res_box justify-content-between">
                        <div className="col-lg-3 col-12">
                            <div className="res_h">
                                Права заявителя:
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="res_p">
                                - Использование сертификата соответствия на продукцию в рекламных целях;
                            </div>
                            <div className="res_p">
                                - Маркирования Знаком соответствия саму продукцию, упаковку, тару и сопроводительной документации;
                            </div>
                            <div className="res_p">
                                - Присутствовать при проведении испытаний своей продукции;
                            </div>
                            <div className="res_p">
                                - Подачи апелляции, жалобы при несогласии с действиями ОС;
                            </div>
                            <div className="res_p">
                                - Требования сокращения сроков проведения процедур сертификации, оптимизации затрат связанных с проведением сертификации изделий в ОС и обеспечение конфиденциальности в работе с заявителем.
                            </div>
                        </div>

                    </div>
                    <div className="row res_box justify-content-between">
                        <div className="col-lg-3 col-12">
                            <div className="res_h">
                                Обязанности:
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="res_p">
                                - Oбеспечение соответствия всей реализуемой продукции установленным требованиям НД и испытанному образцу;
                            </div>
                            <div className="res_p">
                                - Cвоевременного оповещения ОС о всех планируемых внесений изменений в конструкцию и технологию, которые могут оказать влияние на характеристики сертифицированной продукции;
                            </div>
                            <div className="res_p">
                                - Предоставления полного комплекта документации на сертифицируемую продукцию.
                            </div>
                        </div>

                    </div>
                    <div className="row res_box justify-content-between">
                        <div className="col-lg-3 col-12">
                            <div className="res_h">
                                Ответственность за:
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="res_p">
                                - Соответствие сертифицированной продукции требованиям нормативных документов, которые подтверждаются при сертификации;
                            </div>
                            <div className="res_p">
                                - Рекламу и простановку знака соответствия на продукцию, не имеющих сертификата соответствия;
                            </div>
                            <div className="res_p">
                                - Реализацию сертифицированной  продукции, имеющих заключение ОС на приостановку или аннулирования сертификата соответствия;
                            </div>
                            <div className="res_p">
                                - Правильность использования сертификата соответствия и применение знака соответствия.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Responsibly