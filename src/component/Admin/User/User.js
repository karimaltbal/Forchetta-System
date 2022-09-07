import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { getAllUsers, deleteUser, clearError } from "../../../redux/actions/userActions";
import { DELETE_USER_RESET } from "../../../redux/constants/userConstants";


import SideBar from "../layout/Sidebar/Sidebar";
import "../Event/event.css";
import Loader from "../../layout/Loader/Loader";


const User = () => {
    

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const lang = localStorage.getItem("lng");
    const {loading, error, userData} = useSelector((state) => state.userList);
    const { error: deleteError, isDeleted } = useSelector((state) => state.user);

    const deleteMenuHandler = (id) => {
        dispatch(deleteUser(id));
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
            alert.success("User Deleted Successfully");
            navigate("/admin/user");
            dispatch({ type: DELETE_USER_RESET });
        }

        dispatch(getAllUsers());
    }, [dispatch, alert, error, navigate, lang, deleteError, isDeleted]);





    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

        { field: "name", headerName: "Name", minWidth: 150, flex: 0.3},
        { field: "email", headerName: "Email",  minWidth: 350, flex: 1 },

        { field: "actions", flex: 0.3, headerName: "Actions", minWidth: 150, type: "number", sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Button onClick={() => deleteMenuHandler(params.getValue(params.id, "id"))}>
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];


    const rows = [];

    userData && userData.forEach((item) => {
        rows.push({
            id: item.id,
            name: item.name,
            email: item.email,
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
                        <h1 id="productListHeading">ALL USERS</h1>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            className="productListTable"
                            autoHeight
                        />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default User;
