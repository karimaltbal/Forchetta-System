import React from 'react'
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import "./about.css"
import Defintionabout from "./Defintionabout"
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>About Forchetta</title>
        <meta property="og:title" content="About &mdash; Forchetta" />
        <meta itemprop="name" content="About — Forchetta" />
        <meta name="twitter:title" content="About — Forchetta" />
      </Helmet>

      <Header />

      <Defintionabout />

      <section className="ourMession">
        <div className="container">
          <h3 className="mb-5">
            <span>{t("home.about.ourmission.title")}</span>
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div className="single-defination">
                <p>1. {t("home.about.ourmission.description1")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-defination">
                <p>2. {t("home.about.ourmission.description2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourVession">
        <div className="container">
          <h3 className="mb-5">
            <span>{t("home.about.ourvission.title")}</span>
          </h3>
          <div className="row">
            <div className="col-12">
              <div className="single-defination">
                <p>{t("home.about.ourvission.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About