import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Pagination from "react-js-pagination";

import { getAllEvent } from "../../redux/actions/eventActions";
import { useAlert } from "react-alert";

import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Loader from "../layout/Loader/Loader"


const Events = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const alert = useAlert();

    const lang = localStorage.getItem("lng")
    let [currentPage, setCurrentPage] = useState(1);
    const {loading, error, eventData, paginationData, perPage} = useSelector((state) => state.eventList);
    const setCurrentPageNo = (e) => { setCurrentPage(e) };


    useEffect(() => {
        if (error) { return alert.error(error);}

        dispatch(getAllEvent(currentPage));

    }, [alert, currentPage, dispatch, error]);


  return (
    <>
      <Helmet>
        <title>Events Forchetta</title>
        <meta property="og:title" content="Events &mdash; Forchetta" />
        <meta itemprop="name" content="Events — Forchetta" />
        <meta name="twitter:title" content="Events — Forchetta" />
      </Helmet>
      {loading? (
        <Loader />
      ):(
        <Fragment>

          <Header />
  
          <section className="blog-area section-gap" id="blog">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="menu-content pb-70 col-lg-8">
                  <div className="title text-center">
                    <h2 className="mb-10">{t("home.event.title")}</h2>
                    <p>{t("home.event.description")}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {eventData?.map((ele) => (
                  <div style={{marginBottom: "10px"}}
                    key={ele.id}
                    className="col-lg-3 col-md-6 col-sm-6 single-blog"
                  >
                    <div className="thumb">
                      <img style={{height: "18rem"}} className="img-fluid" src={ele.image} alt="" />
                    </div>
                    <p className="date">{ele.date}</p>
                    <div style={{ marginTop: "15px", whiteSpace: "nowrap", background: "#efefef",padding: "5px", borderRadius: "5px"}}>
                      <Link to="blog-single.html">
                        <h4 style={{overflow: "hidden", fontSize:" 1rem"}}>{lang === "ar" ? ele.ar_title : ele.en_title}</h4>
                      </Link>
                      <p style={{textOverflow: "ellipsis", overflow: "hidden"}}>{lang === "ar" ? ele.ar_description : ele.en_description}</p>
                    </div>
                    <Link to={`/singleevent/${ele.id}`} className="primary-btn text-uppercase mt-20">
                        {lang === "ar" ? "قرأه المزيد" : "Read More"}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="paginationBox">
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={paginationData?.per_page}
                totalItemsCount={perPage ||0}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
            />
        </div>
  
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default Events;
