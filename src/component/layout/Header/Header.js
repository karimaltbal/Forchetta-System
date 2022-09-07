import React from 'react'
import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next";

import "./header.css"
import Navbar from "../Navbar/Navbar";
const Header = () => {
    const { t } = useTranslation();

  return (
    <section className="banner-area">
      <Navbar />
      <div className="container">
        <div
          className="row fullscreen align-items-center justify-content-between"
          style={{ height: "447px" }}
        >
          <div className="col-lg-12 banner-content">
            <h6 className="text-white">{t("home.header.title")}</h6>
            <h1 className="text-white">{t("home.header.heading")}</h1>
            <p className="text-white">{t("home.header.description")}</p>
            <Link to="#" className="primary-btn text-uppercase">
              {t("home.header.btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header