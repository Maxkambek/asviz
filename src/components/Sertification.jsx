import React from 'react'
import { Link } from 'react-router-dom'

const Sertification = () => {
    return (
        <>
            <div className="Sertification">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sertif_name">
                                Сертификация
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="sertif_img_box">
                            <img className='sertif_img' src="/img/Swip_1.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 col-12"></div>
                        <div className="col-lg-6 col-12 ">
                            <div className="sertif_box">
                                {/* <div className="sertif_name_2">Траснформаторы силовые:</div> */}
                                <Link to="/Sertif1"><div className="box_p">1 -Oбщие правила сертификации </div></Link>
                                <Link to="/Sertif2"><div className="box_p">2-Схемы сертификации</div></Link>
                                <Link to="/Sertif3"><div className="box_p">3-Сертифицируемая продукция</div></Link>
                                <Link to="/Sertif4"><div className="box_p">4-Права, обязанности и ответственность заявителя</div></Link>
                                <Link to="/Sertif5"><div className="box_p">5-Жалобы и апелляции</div></Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-12">
                            <div className="sertif_h">Общие  правила сертификации высоковольтных и электротехнических изделий</div>
                            <div className="sertif_p">Сертификация высоковольтных и электротехнических изделий (ВЭТИ) осуществляется как на обязательной, так и на добровольной основе в соответствии с требованиями Закона Республики Узбекистан «О сертификации продукции и услуг» и Постановлением Кабинета министров Республики Узбекистан № 318 от 6 июля 2004г. «О дополнительных мерах по упрощению процедур сертификации продукции». </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="sertif_h_2">
                                Порядок организации и проведения сертификации определен в нормативных документах НСС Уз и содержит следующие основные операции:
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="sertif_p">
                                -        представление заявителем заявки совместно с НД и ТД на сертифицируемое изделие. Кроме того, в зависимости от схем сертификации, могут быть затребованы товаро-сопроводительные и транспортные документы (накладные, инвойс, грузовая таможенная декларация и т.п.);
                            </div>
                            <div className="sertif_p">
                                -       проведение анализа представленных документов и принятие решения ОС ВЭТИ по заявке, в которой указываются схема сертификации, условия сертификации и ИЛ, в которой будут проведены сертификационные испытания. Один экземпляр такого решения передается заявителю, второй – передается в ИЛ ВЭТИ, третий – остается в ОС ВЭТИ;
                            </div>
                            <div className="sertif_p">
                                -       оформление договора с заявителем на проведение сертификации и осуществление им стопроцентной предоплаты работ (согласно O’z RH 51-032);
                            </div>
                            <div className="sertif_p">
                                -       организация подготовки к испытаниям (программа и методика испытаний, подготовка средств измерений и испытательного оборудования и т.п.);
                            </div>
                            <div className="sertif_p">
                                -       отбор и идентификация образцов изделий (на заводе-изготовителе, на таможенном складе и т.п.);
                            </div>
                            <div className="sertif_p">
                                -       проведение сертификационных испытаний в ИЛ ВЭТИ (при необходимости, для проверки отдельных показателей или характеристик ВЭТИ,  они могут пройти испытания на субподрядной основе в сторонней аккредитованной ИЛ);
                            </div>
                            <div className="sertif_p">
                                -       при отрицательных результатах испытаний, а также при представлении неполного комплекта документов ОС выдаст заявителю заключение об отказе в выдаче сертификата соответствия, с указанием конкретных норм законодательств;
                            </div>
                            <div className="sertif_p">
                                -       проверку условий производства ВЭТИ (схема сертификации 3), включающей обязательную демонстрацию системы менеджмента (СМК);
                            </div>
                            <div className="sertif_p">
                                -       анализ полученных результатов проведенных процедур сертификации в ОС ВЭТИ (сертификационная комиссия) и оформление заключения о возможности выдачи (в отказе выдачи) сертификата соответствия и права простановки знака соответствия (для схемы 3);
                            </div>
                            <div className="sertif_p">
                                -       выдача сертификата соответствия с регистарцией в Государственном реестре НСС Уз.;
                            </div>
                            <div className="sertif_p">
                                -        ОС, не менее одного раза в год проводит инспекционную контрольную проверку для (схемы 3) сертифицированной продукции с целью подтверждения её соответствия требованиям установленным при сертификации и по результатам контроля действие сертификата соответствия и применение знака соответствия может быть подтверждено, приостановлено или отменена;
                            </div>
                            <div className="sertif_p">
                                -       ОС информирует изготовителя и НСО о приостановлении действия или аннулирования  сертификата и права применения заявителем знака подтверждения соответствия;
                            </div>
                            <div className="sertif_p">
                                -       информирование о результатах сертификации (Узбекское агентство по техническому регулированию);
                            </div>
                            <div className="sertif_p">
                                -       рассмотрение апелляций в соответствии с требованиями РД Уз 51-026.
                            </div>
                            <div className="sertif_p_2">
                                Деятельность ОС ВЭТИ и ИЛ ВЭТИ подвергается периодическому контролю со стороны ГУП "Узбекский центр аккредитации".
                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
        </>
    )
}

export default Sertification