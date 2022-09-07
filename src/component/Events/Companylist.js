import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Pagination from "react-js-pagination";

import { getAllCompany } from "../../redux/actions/companyAction";
import { useAlert } from "react-alert";

import "./company.css"
import Loader from "../layout/Loader/Loader"
const Companylist = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const alert = useAlert();

    
    let [currentPage, setCurrentPage] = useState(1);
    const {loading, error, companyData, paginationData, perPage, numProduct} = useSelector((state) => state.companyList);
    const setCurrentPageNo = (e) => { setCurrentPage(e) };


    useEffect(() => {
        if (error) { return alert.error(error);}

        dispatch(getAllCompany(currentPage));

    }, [alert, currentPage, dispatch, error]);

  
  return (
    <div className="companyList" style={{margin: "50px 0"}}>
      <div className="container text-center">
        <div className="heading mb-5">
          <h2>{t("home.about.companylist.title")}</h2>
          <p>{t("home.about.companylist.description")}</p>
        </div>

        <div className='row'>
          {loading? (
            <Loader />
          ):(
            <React.Fragment>
              {numProduct === 0 ? ( <p>{t("home.nodata")}</p>) :(
                companyData?.map((ele, ind)=>(
                  <div key={ind} className="item col-md-3 col-12">
                    <div className="">
                      <img style={{maxWidth: "100%", height: "120px"}} src={ele.image} alt={`${ele.title} Forchetta`} />
                    </div>
                    <div className="">
                      <h4  className="mt-2"  style={{ color: "#f42f2c", fontSize: "1rem" }} >
                        {ele.title}
                      </h4>
                    </div>
                  </div>
                ))
              )}
            </React.Fragment>
          )}


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
        </div>

      </div>
    </div>
  );
}

export default Companylist;