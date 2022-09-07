import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import aboutImg from "../../images/Home/about/about-img.jpg";

const Defintionabout = () => {
    const { t } = useTranslation();

  return (
        <section className="home-about-area section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 home-about-left">
                <h2>{t("home.about.title")}</h2>
                <p>{t("home.about.description")}</p>
                <Link to="#" className="primary-btn">{t("home.about.btn")}</Link>
              </div>
              <div className="col-md-6 home-about-right">
                <img className="border border-5 rounded-3 img-fluid" src={aboutImg} alt="About Forchetta" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Defintionabout;