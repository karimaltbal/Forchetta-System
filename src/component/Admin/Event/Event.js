import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { getAllEventAdmin, getAllEvent, deleteEvent, clearError } from "../../../redux/actions/eventActions";
import { useAlert } from "react-alert";
import { DELETE_EVENT_RESET } from "../../../redux/constants/eventConstant";


import SideBar from "../layout/Sidebar/Sidebar";
import "./event.css";
import Loader from "../../layout/Loader/Loader";
import Pagination from "react-js-pagination";


const Event = () => {
    

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //const {loading, error, eventDataAdmin} = useSelector((state) => state.eventListAdmin);
    let [currentPage, setCurrentPage] = useState(1);
    const {loading, error, eventData, paginationData, perPage} = useSelector((state) => state.eventList);
    const setCurrentPageNo = (e) => { setCurrentPage(e) };
    const { error: deleteError, isDeleted } = useSelector((state) => state.event);

    const deleteEventHandler = (id) => {
        dispatch(deleteEvent(id));
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
            alert.success("Event Deleted Successfully");
            navigate("/admin/event");
            dispatch({ type: DELETE_EVENT_RESET });
        }

        //dispatch(getAllEventAdmin(lang));
        dispatch(getAllEvent(currentPage));
    }, [dispatch, alert, error, navigate, deleteError, isDeleted, currentPage]);





    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

        { field: "title", headerName: "Title", minWidth: 150, flex: 0.3},
        { field: "description", headerName: "Description",  minWidth: 350, flex: 1 },
        { field: "date", headerName: "Date", minWidth: 270, flex: 0.5 },

        { field: "actions", flex: 0.3, headerName: "Actions", minWidth: 150, type: "number", sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link to={`/admin/event/${params.getValue(params.id, "id")}`}>
                            <EditIcon />
                        </Link>

                        <Button onClick={() => deleteEventHandler(params.getValue(params.id, "id"))}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];


    const rows = [];

    eventData && eventData.forEach((item) => {
        rows.push({
            id: item.id,
            title: item.en_title,
            description: item.en_description,
            date: item.date,
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
                        <h1 id="productListHeading">ALL EVENTS</h1>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
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

export default Event;
