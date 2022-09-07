import React, { useRef, useEffect  } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./navbar.css";
import logoImg from "../../../images/Header/FORCHETTA SVG.svg";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const refDiv = useRef(null);



    const currentLang = localStorage.getItem("lng");

    useEffect(() => {
      currentLang === "ar"
        ? (document.body.dir = "rtl")
        : (document.body.dir = "ltr");
    }, [currentLang]);

    const changeLangHandelr = (e) => {
      i18n.changeLanguage(e.target.value);
      localStorage.setItem("lng", e.target.value);
    };


    const closeBar = ()=>{
      document.getElementById("navbarNavAltMarkup").classList.remove("show");
    }

    return (
    <div id="header">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div style={{height: "90px", width: "200px", zIndex: "0"}} id="logo">
              <NavLink to="/">
                <img  src={logoImg} alt="Forchetta Loga"/>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container main-menu ">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <span className="navbar-brand">Menu</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              ref={refDiv}
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <button onClick={closeBar} className="closeBar">x</button>
                <NavLink className="nav-link" to="/">{t("home.navbar.nav1")}</NavLink>
                <NavLink className="nav-link"  to="/about">{t("home.navbar.nav2")}</NavLink>
                <NavLink className="nav-link" to="/menu">{t("home.navbar.nav3")}</NavLink>
                <NavLink className="nav-link" to="/gallery">{t("home.navbar.nav4")}</NavLink>
                <NavLink className="nav-link" to="/events">{t("home.navbar.nav5")}</NavLink>
                <NavLink className="nav-link" to="/blog">{t("home.navbar.nav6")}</NavLink>
                <NavLink className="nav-link" to="/contact">{t("home.navbar.nav7")}</NavLink>

                <NavLink style={{height: "40px"}} className="nav-link btn btn-outline-danger" to="/login">
                  {t("home.navbar.btn")}
                </NavLink>

                <select
                  className="langBtn"
                  /*style={{  bacposition: "fixed",kground: "blue", zIndex: "5000" }}*/
                  onChange={(e) => changeLangHandelr(e)}
                  value={currentLang || "en"}
                >
                  <option value="en">en</option>
                  <option value="ar">ar</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
