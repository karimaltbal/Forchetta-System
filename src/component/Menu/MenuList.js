import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Pagination from "react-js-pagination";

import { getAllMenu } from "../../redux/actions/menuActions";
import { useAlert } from "react-alert";
//import i18n from "i18next";


import "./menu.css"

const Menu = () => {
    //const navValue = i18n.t("home.menu.menuNav", { returnObjects: true });


    const { t } = useTranslation()
    const dispatch = useDispatch();
    const alert = useAlert();



    const lang = localStorage.getItem("lng")
    const { error, menuData, paginationData, perPage } = useSelector((state) => state.menuList);
    let [currentPage, setCurrentPage] = useState(1);
    const setCurrentPageNo = (e) => { setCurrentPage(e) };

    //console.log(menuData?.filter((ele) => ele.en_title === "Main Course"));

    useEffect(() => {
        if (error) { return alert.error(error);}

        dispatch(getAllMenu(currentPage));

    }, [alert, currentPage, dispatch, error]);

    return (
        <section className="menu-area section-gap">
            <div className='container'>

                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-70 col-lg-8">
                        <div className="title text-center">
                            <h4 className="mb-10">{t("home.menu.title")}</h4>
                            <p>{t("home.menu.description")}</p>
                        </div>
                    </div>
                </div>

                <ul className="nav nav-pills mb-3 filter-wrap filters" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t("home.menu.menuNav.nav1")}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t("home.menu.menuNav.nav2")}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{t("home.menu.menuNav.nav3")}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">{t("home.menu.menuNav.nav4")}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-appetizers-tab" data-bs-toggle="pill" data-bs-target="#pills-appetizers" type="button" role="tab" aria-controls="pills-appetizers" aria-selected="false">{t("home.menu.menuNav.nav5")}</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-vegetarian-tab" data-bs-toggle="pill" data-bs-target="#pills-vegetarian" type="button" role="tab" aria-controls="pills-vegetarian" aria-selected="false">{t("home.menu.menuNav.nav6")}</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-salads-tab" data-bs-toggle="pill" data-bs-target="#pills-salads" type="button" role="tab" aria-controls="pills-salads" aria-selected="false">{t("home.menu.menuNav.nav7")}</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-dessert-tab" data-bs-toggle="pill" data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert" aria-selected="false">{t("home.menu.menuNav.nav8")}</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-beverage-tab" data-bs-toggle="pill" data-bs-target="#pills-beverage" type="button" role="tab" aria-controls="pills-beverage" aria-selected="false">{t("home.menu.menuNav.nav9")}</button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    
                    <div className="tab-pane fade grid show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <div className="row">
                            {menuData?.map((ele)=>( ele.id === 5 ? 
                                (ele.food.map((ele2)=>(
                                        <div key={ele2.id} className="single-menu col-md-4 col-sm-12">
                                            <div className="title-wrap d-flex justify-content-between">
                                                <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                            </div>			
                                            <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                        </div>
                                ))): "")
                            )}
                        </div> 

                    </div>





                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 6 ? (
                            ele.food.map((ele2)=>(
                                <div key={ele2.id} className="single-menu col-md-3 col-sm-12">
                                    <div className="title-wrap d-flex justify-content-between">
                                        <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                    </div>			
                                    <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                </div>
                            ))):"")
                        )}
                    </div>




                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 7 ? 
                            (
                                ele.food.map((ele2)=>(
                                    <div key={ele2.id} className="single-menu col-12 col-sm-4">
                                        <div className="title-wrap d-flex justify-content-between">
                                            <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                        </div>			
                                        <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                    </div>
                                ))
                            ): ""
                            )
                        )}
                    </div>



                    <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 4 ? 
                            (
                                ele.food.map((ele2)=>(
                                    <div key={ele2.id} className="single-menu col-12 col-sm-4">
                                        <div className="title-wrap d-flex justify-content-between">
                                            <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                        </div>			
                                        <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                    </div>
                                ))
                            ): ""
                            )
                        )}
                    </div>


                    <div className="tab-pane fade" id="pills-appetizers" role="tabpanel" aria-labelledby="pills-appetizers-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 8 ? 
                            (
                                ele.food.map((ele2)=>(
                                    <div key={ele2.id} className="single-menu col-12 col-sm-4">
                                        <div className="title-wrap d-flex justify-content-between">
                                            <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                        </div>			
                                        <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                    </div>
                                ))
                            ): ""
                            )
                        )}
                    </div>

                    




                    
                    <div className="tab-pane fade" id="pills-vegetarian" role="tabpanel" aria-labelledby="pills-vegetarian-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 9 ? 
                            (
                                ele.food.map((ele2)=>(
                                    <div key={ele2.id} className="single-menu col-12 col-sm-4">
                                        <div className="title-wrap d-flex justify-content-between">
                                            <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                        </div>			
                                        <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                    </div>
                                ))
                            ):""
                            )
                        )}
                    </div>




                    <div className="tab-pane fade" id="pills-salads" role="tabpanel" aria-labelledby="pills-salads-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 3 ? 
                            (
                                ele.food.map((ele2)=>(
                                    <div key={ele2.id} className="single-menu col-12 col-sm-4">
                                        <div className="title-wrap d-flex justify-content-between">
                                            <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                        </div>			
                                        <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                    </div>
                                ))
                            ): ""
                            )
                        )}
                    </div>



                    <div className="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 10 ? 
                            (
                                ele.food.map((ele2)=>(
                                    <div key={ele2.id} className="single-menu col-12 col-sm-4">
                                        <div className="title-wrap d-flex justify-content-between">
                                            <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                        </div>			
                                        <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                    </div>
                                ))
                            ): ""
                            )
                        )}
                    </div>


                    <div className="tab-pane fade" id="pills-beverage" role="tabpanel" aria-labelledby="pills-beverage-tab" tabIndex="0">
                        {menuData?.map((ele)=>( ele.id === 11 ? 
                            (
                                ele.food.map((ele2)=>(
                                    <div key={ele2.id} className="single-menu col-12 col-sm-4">
                                        <div className="title-wrap d-flex justify-content-between">
                                            <h4>{lang === "ar"? ele2.ar_title: ele2.en_title }</h4>
                                        </div>			
                                        <p>{lang === "ar"? ele2.ar_description: ele2.en_description }</p>									
                                    </div>
                                ))
                            ): ""
                            )
                        )}
                    </div>


                                                
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
        </section>
  );
}

export default Menu