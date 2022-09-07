import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { getAllBlogAdmin, getAllBlog, deleteBlog, clearError } from "../../../redux/actions/blogActions";
import { DELETE_BLOG_RESET } from "../../../redux/constants/blogConstants";


import SideBar from "../layout/Sidebar/Sidebar";
import "../Event/event.css";
import Loader from "../../layout/Loader/Loader";
import Pagination from "react-js-pagination";


const Blogs = () => {
    

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const lang = localStorage.getItem("lng");
    //const {loading, error, blogDataAdmin} = useSelector((state) => state.blogListAdmin);
    let [currentPage, setCurrentPage] = useState(1);
    const {loading, error, blogData, paginationData, perPage} = useSelector((state) => state.blogList);
    const setCurrentPageNo = (e) => { setCurrentPage(e) };
    const { error: deleteError, isDeleted } = useSelector((state) => state.blog);

    const deleteBlogHandler = (id) => {
        dispatch(deleteBlog(id, lang));
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
            alert.success("Blog Deleted Successfully");
            navigate("/admin/blog");
            dispatch({ type: DELETE_BLOG_RESET });
        }

        //dispatch(getAllBlogAdmin(lang));
        dispatch(getAllBlog(currentPage, lang));
    }, [dispatch, alert, error, deleteError, isDeleted, navigate, lang, currentPage]);




    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

        { field: "title", headerName: "Title", minWidth: 150, flex: 0.3},
        { field: "description", headerName: "Description",  minWidth: 350, flex: 1 },

        { field: "actions", flex: 0.3, headerName: "Actions", minWidth: 150, type: "number", sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link to={`/admin/blog/${params.getValue(params.id, "id")}`}>
                            <EditIcon />
                        </Link>

                        <Button onClick={() => deleteBlogHandler(params.getValue(params.id, "id"))}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];


    const rows = [];

    blogData && blogData.forEach((item) => {
        rows.push({
            id: item.id,
            title: item.en_title,
            description: item.en_description,
        });
    });


    return (
        <Fragment>
            {loading? (
                <Loader />
            ):(
                <div className="dashboard">
                    <SideBar />
                    <div className="productListContainer">
                        <h1 id="productListHeading">ALL BLOGS</h1>

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

export default Blogs;
