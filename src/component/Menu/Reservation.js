import React from 'react'
import { useTranslation } from "react-i18next";

const Reservation = () => {
          const { t } = useTranslation();

  return (
    <section className="reservation-area section-gap relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 reservation-left">
            <h4 className="text-white">{t("home.reservation.title")}</h4>
            <p className="text-white pt-20">
              {t("home.reservation.description")}
            </p>
          </div>
          <div className="col-lg-5 reservation-right">
            <form className="form-wrap text-center" action="#">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder={t("home.reservation.placeholder.name")}
              />
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder={t("home.reservation.placeholder.email")}
              />
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder={t("home.reservation.placeholder.phone")}
              />
              <input
                type="text"
                className="form-control date-picker hasDatepicker"
                name="date"
                placeholder={t("home.reservation.placeholder.date")}
              />
              <div>
                <select className="form-select">
                  <option>{t("home.reservation.placeholder.event")}</option>
                  <option value="1">Event One</option>
                  <option value="2">Event Two</option>
                  <option value="3">Event Three</option>
                  <option value="4">Event Four</option>
                </select>
              </div>
              <button className="primary-btn text-uppercase mt-20">
                {t("home.reservation.btn")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation