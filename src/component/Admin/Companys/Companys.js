import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";


import { getAllCompanyAdmin, getAllCompany, deleteCompany, clearError } from "../../../redux/actions/companyAction";
import { DELETE_COMPANY_RESET } from "../../../redux/constants/companyConstants";


import SideBar from "../layout/Sidebar/Sidebar";
import "../Event/event.css";
import Loader from "../../layout/Loader/Loader";
import Pagination from "react-js-pagination";


const Companys = () => {
    

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [currentPage, setCurrentPage] = useState(1);
    const {loading, error, companyData, paginationData, perPage} = useSelector((state) => state.companyList);
    //const {loading, error, companyDataAdmin, paginationData, perPage,} = useSelector((state) => state.companyListAdmin);
    const { error: deleteError, isDeleted } = useSelector((state) => state.company);
    const setCurrentPageNo = (e) => { setCurrentPage(e) };

    const deleteCompanyHandler = (id) => {
        dispatch(deleteCompany(id));
    };


        useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearError());
        }

        if (isDeleted) {
            alert.success("Company Deleted Successfully");
            navigate("/admin/company");
            dispatch({ type: DELETE_COMPANY_RESET });
        }

        //dispatch(getAllCompanyAdmin(lang));
        dispatch(getAllCompany(currentPage));
    }, [dispatch, alert, error, deleteError, isDeleted, navigate, currentPage]);





    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

        { field: "title", headerName: "Title", minWidth: 150, flex: 0.3},
        { field: "image", headerName: "Image", minWidth: 270, flex: 0.5,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <img style={{ maxWidth: "100%", height: "100%", margin: "auto"}} src={params.getValue(params.id, "image")} alt="" />
                    </Fragment>
                );
            }
        },

        { field: "actions", flex: 0.3, headerName: "Actions", minWidth: 150, type: "number", sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link to={`/admin/company/${params.getValue(params.id, "id")}`}>
                            <EditIcon />
                        </Link>

                        <Button onClick={() => deleteCompanyHandler(params.getValue(params.id, "id"))}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];


    const rows = [];

    companyData && companyData.forEach((item) => {
        rows.push({
            id: item.id,
            title: item.title,
            image: item.image
        });
    });


    return (
        <Fragment>
            {loading? (
                <Loader />
            ): (
                <div className="dashboard">
                    <SideBar />
                    <div className="productListContainer">
                        <h1 id="productListHeading">ALL COMPANY</h1>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={11}
                            disableSelectionOnClick
                            className="productListTable"
                            autoHeight
                        />

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
            )}
        </Fragment>
    );
};

export default Companys;
