import React from 'react'
import { useTranslation } from "react-i18next";


import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import "./gallery.css";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="menu-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h4 className="mb-10">{t("home.gallery.title")}</h4>
                <p>{t("home.gallery.description")}</p>
              </div>
            </div>
          </div>

          <ul
            className="nav nav-pills mb-3 filter-wrap filters"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                {t("home.gallery.menuNav.nav1")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                {t("home.gallery.menuNav.nav2")}
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade row grid show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <div className="single-menu col-12 col-sm-4">
                <div className="title-wrap d-flex justify-content-between">
                  <h4 className="price">
                    <img
                      src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
                      alt=""
                    />
                  </h4>
                </div>
              </div>

              <div className="single-menu col-12 col-sm-4">
                <div className="title-wrap d-flex justify-content-between">
                  <h4 className="price">
                    <img
                      src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
                      alt=""
                    />
                  </h4>
                </div>
              </div>

              <div className="single-menu col-12 col-sm-4">
                <div className="title-wrap d-flex justify-content-between">
                  <h4 className="price">
                    <img
                      src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
                      alt=""
                    />
                  </h4>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <div className="single-menu col-12 col-sm-4">
                <div className="title-wrap d-flex justify-content-between">
                  <h4 className="price">
                    <img
                      src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
                      alt=""
                    />
                  </h4>
                </div>
              </div>

              <div className="single-menu col-12 col-sm-4">
                <div className="title-wrap d-flex justify-content-between">
                  <h4 className="price">
                    <img
                      src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
                      alt=""
                    />
                  </h4>
                </div>
              </div>

              <div className="single-menu col-12 col-sm-4">
                <div className="title-wrap d-flex justify-content-between">
                  <h4 className="price">
                    <img
                      src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
                      alt=""
                    />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery