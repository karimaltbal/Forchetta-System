import React from 'react'
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

import "./contact.css"

const Contact = () => {

    const { t } = useTranslation();

  return (
    <>
        <Helmet>
            <title>Contact Us &mdash; Forchetta</title>
            <meta property="og:title" content="Contact Us &mdash; Forchetta"/>
            <meta itemprop="name" content="Contact Us — Forchetta"/>
            <meta name="twitter:title" content="Contact Us — Forchetta"/>
        </Helmet>

        <Header />
        <section className="contact-page-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex flex-column address-wrap">
                        <div className="single-contact-address d-flex flex-row">
                            <div className="icon">
                                <span className="lnr lnr-home">
                                    <FaHome />
                                </span>
                            </div>
                            <div className="contact-details">
                                <h5>Binghamton, New York</h5>
                                <p>
                                    4343 Hinkle Deegan Lake Road
                                </p>
                            </div>
                        </div>
                        <div className="single-contact-address d-flex flex-row">
                            <div className="icon">
                                <span className="lnr lnr-phone-handset">
                                    <FaPhone />
                                </span>
                            </div>
                            <div className="contact-details">
                                <h5>00 (958) 9865 562</h5>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div>
                        </div>
                        <div className="single-contact-address d-flex flex-row">
                            <div className="icon">
                                <span className="lnr lnr-envelope">
                                    <FaEnvelope />
                                </span>
                            </div>
                            <div className="contact-details">
                                <h5>support@colorlib.com</h5>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>														
                    </div>
                    <div className="col-lg-8">
                        <form className="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
                            <div className="row">	
                                <div className="col-lg-6 form-group">
                                    <input name="name" placeholder={t("home.contact.plaseholder.name")}  className="common-input mb-20 form-control" required type="text" />
                                
                                    <input name="email" placeholder={t("home.contact.plaseholder.email")}  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"  className="common-input mb-20 form-control" required type="email" />

                                    <input name="subject" placeholder={t("home.contact.plaseholder.subject")}  className="common-input mb-20 form-control" required type="text" />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <textarea className="common-textarea form-control" name="message" placeholder={t("home.contact.plaseholder.messege")}    required></textarea>				
                                </div>
                                <div className="col-lg-12">
                                    <div className="alert-msg" style={{textAlign: "left"}}></div>
                                    <button className="genric-btn primary" style={{float: "right"}}>{t("home.contact.btn")}</button>											
                                </div>
                            </div>
                        </form>	
                    </div>
                </div>
            </div>	
        </section>

        <Footer />
    </>
  )
}

export default Contact