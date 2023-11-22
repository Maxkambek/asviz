import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Footer from "../components/Footer";

const Price = () => {
  const [isLoader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  });

  return (
    <>
      {isLoader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="Price">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="pr_name">Расценки</div>

                  <div className="pr_name_2">
                    Расценка услуг по процессу сертификации ОС высоковольтных и
                    электротехнической продукции при ООО «ASVIZ»
                  </div>
                </div>

                <div className="col-12 mt-5">
                  <img className="w-100" src="/img/pr_1.jpg" alt="" />
                </div>
                <div className="col-12 mt-5">
                  <img className="w-100" src="/img/pr_2.jpg" alt="" />
                </div>
                <div className="col-12 mt-5">
                  <img className="w-100" src="/img/pr_3.jpg" alt="" />
                </div>

                <div className="col-12">
                  <div className="pr_name_2 mt-5">
                    *Цена на испытания не могут быть полностью
                    стандартизированы, так как каждый высоковольтный объект
                    имеет свои характерные особенности, поэтому стоимость
                    определяется индивидуально для каждого клиента исходя из
                    состава оборудования и объемов работ.
                  </div>
                </div>
                <div className="col-12">
                  <a href="/ASVIZ расценка работ.pdf">
                    <button class="btn">Скачать</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Price;
